import plugin from '../../../lib/plugins/plugin.js'
import Config from '../components/Config.js'
import { TextToSpeech } from '../components/Bert-VITS2.js'

export class neko_status extends plugin {
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
      if (!e.group_id) return false
      let config = await Config.getConfig().tts_sync_config;
      let c = config.find(item => item.user_id === e.user_id);
      if (!c) return false
      let a = c.use_speeaker
      let url = await TextToSpeech(i, a, c);
      if (!url) return false
      await e.reply(segment.record(url))
    } catch (err) {
      console.log(err)
    }
    return false
  }
}