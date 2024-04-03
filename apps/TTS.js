import { TextToSpeech as BertVITSTextToSpeech } from '../components/Bert-VITS2.js';
import { TextToSpeech as GPTSoVITSTextToSpeech } from '../components/GPT-SoVITS.js';
import { TextToSpeech as GenshinTTSTextToSpeech } from '../components/Genshin-TTS.js';
import plugin from '../../../lib/plugins/plugin.js'
import Config from '../components/Config.js'
import { getRecord } from '../components/Record.js'

export class TTS extends plugin {
  constructor() {
    super({
      /** 功能名称 */
      name: 'VITS-文本转语音',
      /** 功能描述 */
      dsc: '文本转语音',
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 1,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^[/#]?合成.*语音.*$',
          /** 执行方法 */
          fnc: 'tts'
        }
      ]
    })
  }

  async tts(e) {
    const [_, role, text] = e.msg.match(/^[/#]?合成(.*?)语音(.*?)$/) || [];
    if (!role || !text) return e.reply(`请输入要使用的${role ? '文本' : '角色'}`);

    const { tts_config: c } = await Config.getConfig();
    if (c.send_reminder) await e.reply('正在合成语音，请稍等...', true);

    let url;

    if (c.use_model_type == 'GPT-SoVITS') {
      url = await GPTSoVITSTextToSpeech(role, text, c);
    } else if (c.use_model_type == 'Genshin-TTS') {
      url = await GenshinTTSTextToSpeech(role, text, c);
    } else {
      url = await BertVITSTextToSpeech(role, text, c);
    }

    if (!url) return e.reply('合成失败，请检查角色名和文本内容，或检查控制台报错\n  Tips：更换模型类型后请重新设置源，每个源支持的角色不同，相关列表请查看本插件README.md文档');

    const base64 = await getRecord(url);
    await e.reply(segment.record(`base64://${base64}`));

    return true;
  }
}