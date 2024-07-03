import plugin from '../../../lib/plugins/plugin.js'
import Config from '../components/Config.js'
import { TextToSpeech as BertVITSTextToSpeech } from '../components/Bert-VITS2.js';
import { TextToSpeech as GPTSoVITSTextToSpeech } from '../components/GPT-SoVITS.js';
import { TextToSpeech as FishAudioTTSTextToSpeech } from '../components/Fish-Audio.js';
import { getRecord } from '../components/Record.js'

export class vits_sync extends plugin {
  constructor() {
    super({
      /** 功能名称 */
      name: 'VITS-同传',
      /** 功能描述 */
      dsc: '同声传译',
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 99999,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '',
          /** 执行方法 */
          fnc: 'sync',
          /** 关闭日志 */
          log: false
        }
      ]
    })
  }

  async sync(e) {
    try {
      if (!e.group_id || !e.user_id) return false;

      const { tts_sync_config: config, tts_config: { send_base64 } } = await Config.getConfig();
      const c = config.find(item => item.user_id == e.user_id);
      if (!c || !c.use_speaker) return false;

      if (!c.enable_group.includes(String(e.group_id))) return false;

      let url;

      if (c.use_model_type == 'GPT-SoVITS') {
        url = await GPTSoVITSTextToSpeech(c.use_speaker, e.msg, c);
      } else if (c.use_model_type == 'Fish-Audio') {
        url = await FishAudioTTSTextToSpeech(c.use_speaker, e.msg, c);
      } else {
        url = await BertVITSTextToSpeech(c.use_speaker, e.msg, c);
      }

      if (!url) return false;

      if (send_base64) {
        const base64 = await getRecord(url);
        await e.reply(segment.record(`base64://${base64}`));
      } else {
        await e.reply(segment.record(url));
      }

      return false;
    } catch (err) {
      logger.error(err)
      return false;
    }
  }
}