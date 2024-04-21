import plugin from '../../../lib/plugins/plugin.js'
import _ from 'lodash'

export class help extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'VITS-帮助',
            /** 功能描述 */
            dsc: 'VITS帮助',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 1009,
            rule: [
                {
                    /** 命令正则匹配 */
                    reg: '^(/|#)vits帮助$',
                    /** 执行方法 */
                    fnc: 'help'
                }
            ]
        })
    }
    // 不会渲染帮助图啦，先用纯文字叭，等枣子回家再改
    async help(e) {
        let msg = "======VITS帮助======\n"
        msg += "1. 发送【合成(角色名)语音(内容)】即可合成对应角色语音\n"
        msg += "2. 发送【vits模型】即可查看可用模型类型\n"
        msg += "3. 发送【vits设置模型(模型)】即可设置对应模型类型\n"
        msg += "4. 发送【vits源】即可查看可用源\n"
        msg += "5. 发送【vits设置源(源)】即可设置对应源\n"
        msg += "6. 发送【vits发音人】即可查看可用发音人\n"
        msg += "7. 发送【vits开启/关闭同传】即可在对应群开启/关闭同传\n"
        msg += "8. 发送【vits设置同传模型(模型)】即可设置对应模型类型用于同传\n"
        msg += "9. 发送【vits设置同传源(源)】即可设置对应源用于同传\n"
        msg += "10. 发送【vits同传发音人】即可查看同传可用发音人\n"
        msg += "11. 发送【vits设置同传发音人(发音人)】即可设置对应开关用于同传\n"
        msg += "12. 发送【vits设置原神密钥(密钥)】即可设置原神语音合成密钥\n"
        msg += "13. 发送【vits更新】即可更新VITS插件"

        await e.reply(msg)
        return true
    }
}