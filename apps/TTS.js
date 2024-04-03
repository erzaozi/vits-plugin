import plugin from '../../../lib/plugins/plugin.js'
import { TextToSpeech } from '../components/Bert-VITS2.js'

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
    const params = e.msg.match(/^[/#]?合成(.*?)语音(.*?)$/);
    const [Z, i, a] = params;
    if (!i) return e.reply('请输入要使用的角色')
    if (!a) return e.reply('请输入要合成的文本')
    let c = await Config.getConfig().tts_config;
    let url = await TextToSpeech(i, a, c);
    if (!url) return e.reply('合成失败，请检查角色名和文本内容')
    await e.reply(segment.record(url))
    return true
  }
}