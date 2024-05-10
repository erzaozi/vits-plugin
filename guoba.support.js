import Config from "./components/Config.js";
import lodash from "lodash";
import path from "path";
import { pluginRoot } from "./model/path.js";

export function supportGuoba() {
  return {
    pluginInfo: {
      name: 'vits-plugin',
      title: '在线VITS插件',
      author: ['@erzaozi', '@CikeyQi'],
      authorLink: ['https://github.com/erzaozi', 'https://github.com/CikeyQi'],
      link: 'https://github.com/erzaozi/vits-plugin',
      isV3: true,
      isV2: false,
      showInMenu: true,
      description: '基于 Yunzai 的在线语音合成插件',
      // 显示图标，此为个性化配置
      // 图标可在 https://icon-sets.iconify.design 这里进行搜索
      icon: 'icon-park:voice-message',
      // 图标颜色，例：#FF0000 或 rgb(255, 0, 0)
      iconColor: '#d19f56',
      // 如果想要显示成图片，也可以填写图标路径（绝对路径）
      iconPath: path.join(pluginRoot, 'resources/readme/girl.png'),
    },
    configInfo: {
      schemas: [
        {
          component: "Divider",
          label: "TTS 相关配置",
          componentProps: {
            orientation: "left",
            plain: true,
          },
        },
        {
          field: "tts_config.use_model_type",
          label: "TTS 模型类型",
          bottomHelpMessage: "选择TTS模型类型",
          component: "Select",
          componentProps: {
            options: [
              { label: "Bert-VITS2", value: "Bert-VITS2" },
              { label: "GPT-SoVITS", value: "GPT-SoVITS" },
              { label: "Genshin-TTS", value: "Genshin-TTS" },
            ],
          },
        },
        {
          field: "tts_config.use_interface_sources",
          label: "TTS 接口来源",
          bottomHelpMessage: "选择TTS接口来源",
          component: "Select",
          componentProps: {
            options: [
              { label: "Modelscope", value: "Modelscope" },
              { label: "Huggingface", value: "Huggingface" },
            ],
          },
        },
        {
          field: "tts_config.send_reminder",
          label: "TTS 接收命令提示",
          bottomHelpMessage: "接收到命令时是否发送提示",
          component: "Switch",
        },
        {
          field: "tts_config.send_base64",
          label: "使用 Base64 格式发送语音",
          bottomHelpMessage: "避免网络质量不佳导致的语音无法发出",
          component: "Switch",
        },
        {
          component: "Divider",
          label: "同传 相关配置",
          componentProps: {
            orientation: "left",
            plain: true,
          },
        },
        {
          field: "tts_sync_config",
          label: "同传配置",
          bottomHelpMessage: "用于同传的配置",
          component: "GSubForm",
          componentProps: {
            multiple: true,
            schemas: [
              {
                field: "user_id",
                label: "同传用户ID",
                component: "Input",
                required: true,
              },
              {
                field: "enable_group",
                label: "同传群组",
                bottomHelpMessage: "若用户在此群组中发言，将启用同传",
                component: "GTags",
                componentProps: {
                  placeholder: '请输入群组ID',
                  allowAdd: true,
                  allowDel: true,
                  showPrompt: true,
                  promptProps: {
                    content: '请输入群组ID',
                    placeholder: '551081559',
                    okText: '添加',
                    rules: [
                      { required: true, message: '群组ID不能为空' },
                    ],
                  },
                  valueParser: ((value) => value.split(',') || []),
                },
              },
              {
                field: "use_model_type",
                label: "同传 模型类型",
                bottomHelpMessage: "选择同传模型类型",
                component: "Select",
                componentProps: {
                  options: [
                    { label: "Bert-VITS2", value: "Bert-VITS2" },
                    { label: "GPT-SoVITS", value: "GPT-SoVITS" },
                    { label: "Genshin-TTS", value: "Genshin-TTS" },
                  ],
                },
              },
              {
                field: "use_interface_sources",
                label: "同传 接口来源",
                bottomHelpMessage: "选择同传接口来源",
                component: "Select",
                componentProps: {
                  options: [
                    { label: "Modelscope", value: "Modelscope" },
                    { label: "Huggingface", value: "Huggingface" },
                  ],
                },
              },
              {
                field: "use_speaker",
                label: "同传发音人",
                component: "Input",
                required: true, 
              },
            ],
          },
        },
      ],
      getConfigData() {
        let config = Config.getConfig()
        return config
      },

      setConfigData(data, { Result }) {
        let config = {}
        for (let [keyPath, value] of Object.entries(data)) {
          lodash.set(config, keyPath, value)
        }
        config = lodash.merge({}, Config.getConfig(), config)
        config.tts_sync_config = data['tts_sync_config']
        Config.setConfig(config)
        return Result.ok({}, '保存成功~')
      },
    },
  }
}