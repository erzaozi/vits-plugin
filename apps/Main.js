import plugin from '../../../lib/plugins/plugin.js'
import Config from '../components/Config.js'
import { TextToSpeech } from '../components/Bert-VITS2.js'
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
      priority: 1009,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '',
          /** 执行方法 */
          fnc: 'sync'
        }
      ]
    })
  }

  async sync(e) {
    try {
      if (!e.group_id || !e.user_id) return false;
  
      const { tts_sync_config: config } = await Config.getConfig();
      const c = config.find(item => item.user_id === e.user_id);
      if (!c || !c.use_speaker) return false;

      if (!c.enable_group.includes(e.group_id)) return false;
  
      const url = await TextToSpeech(c.use_speaker, e.msg, c);
      if (!url) return false;
  
      const base64 = await getRecord(url);
      await e.reply(segment.record(`base64://${base64}`));
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}