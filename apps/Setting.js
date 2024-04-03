import plugin from '../../../lib/plugins/plugin.js'
import Config from '../components/Config.js'
import Init from '../model/init.js'

export class setting extends plugin {
  constructor() {
    super({
      /** 功能名称 */
      name: 'VITS-设置',
      /** 功能描述 */
      dsc: '设置',
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 1009,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^[/#]?切换.*$',
          /** 执行方法 */
          fnc: 'set',
          /** 主人权限 */
          permission: 'master'
        }
      ]
    })
  }

  async set(e) {
  }
}
