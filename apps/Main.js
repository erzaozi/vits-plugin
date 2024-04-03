import plugin from '../../../lib/plugins/plugin.js'
import Config from '../components/Config.js'

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
    return false
  }
}