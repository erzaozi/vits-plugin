<div align="center">
  
# VITS-PLUGIN

</div>

## 😺 介绍

Yunzai-Bot 的在线VITS插件，收集网络上各种各样的在线语音合成接口

## 😼 安装

- 克隆本仓库至 plugins 目录
```
git clone https://github.com/erzaozi/vits-plugin.git ./plugins/vits-plugin
```

- 安装依赖
```
pnpm install --filter=vits-plugin
```

## 🙀 配置

在项目的配置文件中添加下表中的可选配置

| 配置项 | 默认值 | 说明 |
| :---: | :---: | :---: |
| tts_config | Object | 文本转语音设置 |
| tts_sync_config | Object | 群内同传设置 |
| use_model_type | `Bert-VITS2` | 使用的模型类型 |
| use_interface_sources | `Modelscope` | 使用的在线接口源 |
| send_reminder | `true` | 提示任务已经开始 |
| user_id | String | 开启同传的账号 |
| enable_group | Array | 开启同传的群聊 |
| use_speeaker | `塔菲` | 同传时使用的角色名称 |

## 😸 使用

发送 `#合成(角色名)语音(内容)` 即可开始合成对应角色的语音

## 😻 效果图

**如果使用过程中出现错位问题可以加群 `551081559` 反馈问题**


## 😽 鸣谢

[Xz乔希](https://space.bilibili.com/5859321)：在线语音合成作者
[Bert-VITS2项目](https://github.com/Stardust-minus/Bert-VITS2)：一个非常好的语音合成项目