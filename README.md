![vits-plugin](https://socialify.git.ci/erzaozi/vits-plugin/image?description=1&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)

<img decoding="async" align=right src="resources/readme/girl.png" width="35%">

# VITS-PLUGIN 🍇

- 一个适用于 [Yunzai 系列机器人框架](https://github.com/yhArcadia/Yunzai-Bot-plugins-index) 的的 AI 语音合成插件，让你能够在机器人中使用 AI 语音合成功能

- 使用著名 AI 社区 [Huggingface](https://huggingface.co/) 和国内知名 AI 社区 [Modelscope](https://www.modelscope.cn/) 的接口，支持 BERT-VITS2、GPT-SoVITS、Fish-Audio 等模型，对自身硬件没有要求，降低了使用门槛，让更多人体验 AI 语音合成的乐趣。

- **使用中遇到问题请加 QQ 群咨询：[707331865](https://qm.qq.com/q/TXTIS9KhO2)**

> [!TIP]
> 在朋友们的呼声下 [CikeyQi](https://github.com/CikeyQi) 决定开发这个插件，为了降低使用门槛，该插件搜罗当前互联网中可以直接免费使用的接口，并将其打包进插件中，让用户能够直接在机器人中使用这些接口，这个插件超棒的噢。

## 安装插件

#### 1. 克隆仓库

```
git clone https://github.com/erzaozi/vits-plugin.git ./plugins/vits-plugin
```

> [!NOTE]
> 如果你的网络环境较差，无法连接到 Github，可以使用 [GitHub Proxy](https://mirror.ghproxy.com/) 提供的文件代理加速下载服务
>
> ```
> git clone https://mirror.ghproxy.com/https://github.com/erzaozi/vits-plugin.git ./plugins/vits-plugin
> ```

#### 2. 安装依赖

```
pnpm install --filter=vits-plugin
```

## 插件配置

> [!WARNING]
> 非常不建议手动修改配置文件，本插件已兼容 [Guoba-plugin](https://github.com/guoba-yunzai/guoba-plugin) ，请使用锅巴插件对配置项进行修改

<details> <summary>获取 Modelscope Cookie</summary>

1. 打开 [随便一个需要登录才能使用的空间](https://www.modelscope.cn/studios/xzjosh/DZ-Bert-VITS2-2.3/summary) 并登录，`Ctrl + Shift + I` 打开开发者工具 ，点击 `网络`
2. 等待出现 `status` 请求，点击该请求，复制 `Cookie` 字段即可（注意复制完整）

![cookie](https://github.com/erzaozi/vits-plugin/assets/61369914/1501ff49-b6d4-4434-b449-13fa44d23b38)

</details>

<details> <summary>获取 Fish-Audio Token</summary>

1. 打开 [Fish Audio](https://fish.audio/zh-CN/text-to-speech) 并登录，`Ctrl + Shift + I` 打开开发者工具 ，点击 `网络`
2. 尝试在网页生成一次，等待出现 `task` 请求，点击该请求，复制 `Authorization` 字段即可（注意复制完整）

![cookie](https://github.com/erzaozi/vits-plugin/assets/61369914/2b3b4e6a-9373-4b99-808e-401934d75564)

</details>

## 功能列表

请使用 `#vits帮助` 获取完整帮助

- [x] 单独合成某个角色的语音
- [x] 自动将你的文本消息合成 AI 语音

## 模型列表

模型与源的关系

```
resources
├───Bert-VITS2
│   ├───Modelscope.json
│   └───Huggingface.json
├───GPT-SoVITS
│   ├───Modelscope.json
│   └───Huggingface.json
└───Fish-Audio
    └───Fish-Audio.json
```

要使用对应模型才能使用对应源中的发音人，举个例子，使用 `Bert-VITS2` 模型时能选择 `Modelscope` 和 `Huggingface` 两个源，但不同模型的源是完全不一样的，里面的发音人也不一样，请参考下表找到你想要的发音人位置

### 🍉Bert-VITS2

#### Modelscope 平台

<details><summary>点击展开</summary>

|                                         模型名称                                         |                                           模型名称                                           |                                           模型名称                                            |                                            模型名称                                             |
| :--------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
|     [AI 陈泽（中日英）](https://www.modelscope.cn/studios/xzjosh/Ze-Bert-VITS2-2.3)      | [AI 星瞳（坏女人）（中日英）](https://www.modelscope.cn/studios/xzjosh/badXT-Bert-VITS2-2.3) |    [AI 梅西 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Messi-Bert-VITS2-2.3)     |     [AI 珈乐 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Carol-Bert-VITS2-2.3)      |
|  [AI 乃琳 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Queen-Bert-VITS2-2.3)  |   [AI 七海 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Nana7mi-Bert-VITS2-2.3)   | [AI 塔菲 2.0 重制版（中日英）](https://www.modelscope.cn/studios/xzjosh/Taffy-Bert-VITS2-2.3) | [AI 东雪莲 2.0 重制版（中日英）](https://www.modelscope.cn/studios/xzjosh/Azuma-Bert-VITS2-2.3) |
| [AI 奶绿 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/LAPLACE-Bert-VITS2-2.3) |    [AI 尼奈 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/nine-Bert-VITS2-2.3)     |     [AI 科比 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Kobe-Bert-VITS2-2.3)     |     [AI 嘉然 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Diana-Bert-VITS2-2.3)      |
|   [AI 丁真 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/DZ-Bert-VITS2-2.3)    |  [AI 丁真 2.0（备用 1）](https://www.modelscope.cn/studios/xzjosh/dingzhen-Bert-VITS2-2.3)   |    [AI 丁真 2.0（备用 2）](https://www.modelscope.cn/studios/xzjosh/DZhen-Bert-VITS2-2.3)     |      [AI 炫神 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Xuan-Bert-VITS2-2.3)      |
|  [AI 电棍 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/otto-Bert-VITS2-2.3)   |    [AI 阿梓 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Azusa-Bert-VITS2-2.3)    |   [AI 东雪莲 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Azuma-Bert-VITS2.0.2)    |     [AI 塔菲 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Taffy-Bert-VITS2.0.2)      |
|    [AI 星瞳 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/2568-Bert-VITS2)     |      [AI 孙笑川 2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/SXC-Bert-VITS2)      |             [AI 塔菲](https://www.modelscope.cn/studios/xzjosh/Taffy-Bert-VITS2)              |           [AI 小菲](https://www.modelscope.cn/studios/xzjosh/LittleTaffy-Bert-VITS2)            |
|          [AI 东雪莲](https://www.modelscope.cn/studios/xzjosh/Azuma-Bert-VITS2)          |            [AI 奶绿](https://www.modelscope.cn/studios/xzjosh/LAPLACE-Bert-VITS2)            |             [AI 尼奈](https://www.modelscope.cn/studios/xzjosh/nine1-Bert-VITS2)              |              [AI 珈乐](https://www.modelscope.cn/studios/xzjosh/Carol-Bert-VITS2)               |
|           [AI 电棍](https://www.modelscope.cn/studios/xzjosh/otto-Bert-VITS2)            |            [AI 七海](https://www.modelscope.cn/studios/xzjosh/Nana7mi-Bert-VITS2)            |             [AI 阿梓](https://www.modelscope.cn/studios/xzjosh/Azusa-Bert-VITS2)              |             [AI 星瞳](https://www.modelscope.cn/studios/xzjosh/XingTong-Bert-VITS2)             |
|            [AI 向晚](https://www.modelscope.cn/studios/xzjosh/Ava-Bert-VITS2)            |             [AI 嘉然](https://www.modelscope.cn/studios/xzjosh/Diana-Bert-VITS2)             |             [AI 剑魔](https://www.modelscope.cn/studios/xzjosh/Aatrox-Bert-VITS2)             |              [AI 乃琳](https://www.modelscope.cn/studios/xzjosh/Eileen-Bert-VITS2)              |
|           [AI 贝拉](https://www.modelscope.cn/studios/xzjosh/Bella-Bert-VITS2)           |            [AI 扇宝](https://www.modelscope.cn/studios/xzjosh/ShanBao-Bert-VITS2)            |             [AI 恬豆](https://www.modelscope.cn/studios/xzjosh/Bekki-Bert-VITS2)              |              [AI 黑桃影](https://www.modelscope.cn/studios/xzjosh/Echo-Bert-VITS2)              |
|          [AI 卖卖](https://www.modelscope.cn/studios/xzjosh/maimai-Bert-VITS2)           |             [AI 鹿鸣](https://www.modelscope.cn/studios/xzjosh/Lumi-Bert-VITS2)              |            [AI 文静](https://www.modelscope.cn/studios/xzjosh/Wenjing-Bert-VITS2)             |                                                                                                 |

</details>

#### Huggingface 平台

<details><summary>点击展开</summary>

|                                         模型名称                                         |                                         模型名称                                          |                                          模型名称                                           |                                       模型名称                                       |
| :--------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| [AI 星瞳（坏女人）（中日英）](https://huggingface.co/spaces/XzJosh/badXT-Bert-VITS2-2.3) |    [AI 梅西 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Messi-Bert-VITS2-2.3)     |     [AI 珈乐 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Carol-Bert-VITS2-2.3)      |  [AI 乃琳 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Queen-Bert-VITS2-2.3)  |
|   [AI 七海 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Nana7mi-Bert-VITS2-2.3)   | [AI 塔菲 2.0 重制版（中日英）](https://huggingface.co/spaces/XzJosh/Taffy-Bert-VITS2-2.3) | [AI 东雪莲 2.0 重制版（中日英）](https://huggingface.co/spaces/XzJosh/Azuma-Bert-VITS2-2.3) | [AI 奶绿 2.0（中日英）](https://huggingface.co/spaces/XzJosh/LAPLACE-Bert-VITS2-2.3) |
|    [AI 尼奈 2.0（中日英）](https://huggingface.co/spaces/XzJosh/nine-Bert-VITS2-2.3)     |     [AI 科比 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Kobe-Bert-VITS2-2.3)     |     [AI 嘉然 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Diana-Bert-VITS2-2.3)      |   [AI 丁真 2.0（中日英）](https://huggingface.co/spaces/XzJosh/DZ-Bert-VITS2-2.3)    |
|    [AI 炫神 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Xuan-Bert-VITS2-2.3)     |     [AI 电棍 2.0（中日英）](https://huggingface.co/spaces/XzJosh/otto-Bert-VITS2-2.3)     |     [AI 阿梓 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Azusa-Bert-VITS2-2.3)      | [AI 东雪莲 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Azuma-Bert-VITS2.0.2) |
|    [AI 塔菲 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Taffy-Bert-VITS2.0.2)    |       [AI 星瞳 2.0（中日英）](https://huggingface.co/spaces/XzJosh/2568-Bert-VITS2)       |       [AI 孙笑川 2.0（中日英）](https://huggingface.co/spaces/XzJosh/Sun-Bert-VITS2)        |           [AI 塔菲](https://huggingface.co/spaces/XzJosh/Taffy-Bert-VITS2)           |
|          [AI 小菲](https://huggingface.co/spaces/XzJosh/LittleTaffy-Bert-VITS2)          |            [AI 东雪莲](https://huggingface.co/spaces/XzJosh/Azuma-Bert-VITS2)             |             [AI 奶绿](https://huggingface.co/spaces/XzJosh/LAPLACE-Bert-VITS2)              |           [AI 尼奈](https://huggingface.co/spaces/XzJosh/nine1-Bert-VITS2)           |
|             [AI 珈乐](https://huggingface.co/spaces/XzJosh/Carol-Bert-VITS2)             |              [AI 电棍](https://huggingface.co/spaces/XzJosh/otto-Bert-VITS2)              |             [AI 七海](https://huggingface.co/spaces/XzJosh/Nana7mi-Bert-VITS2)              |           [AI 阿梓](https://huggingface.co/spaces/XzJosh/Azusa-Bert-VITS2)           |
|           [AI 星瞳](https://huggingface.co/spaces/XzJosh/XingTong-Bert-VITS2)            |              [AI 向晚](https://huggingface.co/spaces/XzJosh/Ava-Bert-VITS2)               |              [AI 嘉然](https://huggingface.co/spaces/XzJosh/Diana-Bert-VITS2)               |          [AI 剑魔](https://huggingface.co/spaces/XzJosh/Aatrox-Bert-VITS2)           |
|            [AI 乃琳](https://huggingface.co/spaces/XzJosh/Eileen-Bert-VITS2)             |             [AI 贝拉](https://huggingface.co/spaces/XzJosh/Bella-Bert-VITS2)              |             [AI 扇宝](https://huggingface.co/spaces/XzJosh/ShanBao-Bert-VITS2)              |           [AI 恬豆](https://huggingface.co/spaces/XzJosh/Bekki-Bert-VITS2)           |
|            [AI 黑桃影](https://huggingface.co/spaces/XzJosh/Echo-Bert-VITS2)             |             [AI 卖卖](https://huggingface.co/spaces/XzJosh/maimai-Bert-VITS2)             |               [AI 鹿鸣](https://huggingface.co/spaces/XzJosh/Lumi-Bert-VITS2)               |          [AI 文静](https://huggingface.co/spaces/XzJosh/Wenjing-Bert-VITS2)          |

</details>

### 🍊GPT-SoVITS

#### Modelscope 平台

<details><summary>点击展开</summary>

|                               模型名称                                |                                   模型名称                                    |                                模型名称                                 |                                    模型名称                                    |
| :-------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
| [AI 张顺飞](https://www.modelscope.cn/studios/xzjosh/Shun-GPT-SoVITS) |     [AI 蔡徐坤](https://www.modelscope.cn/studios/xzjosh/Kun-GPT-SoVITS)      |   [AI 米诺](https://www.modelscope.cn/studios/xzjosh/Mino-GPT-SoVITS)   |       [AI 陈泽](https://www.modelscope.cn/studios/xzjosh/Ze-GPT-SoVITS)        |
|  [AI 电棍](https://www.modelscope.cn/studios/xzjosh/otto-GPT-SoVITS)  |      [AI 炫神](https://www.modelscope.cn/studios/xzjosh/Xuan-GPT-SoVITS)      |  [AI 山泥若](https://www.modelscope.cn/studios/xzjosh/Ruo-GPT-SoVITS)   |    [AI 丁真](https://www.modelscope.cn/studios/xzjosh/dingzhen-GPT-SoVITS)     |
| [AI 孙笑川](https://www.modelscope.cn/studios/xzjosh/sun-GPT-SoVITS)  |    [AI 东雪莲](https://www.modelscope.cn/studios/xzjosh/Azuma-GPT-SoVITS)     |  [AI 塔菲](https://www.modelscope.cn/studios/xzjosh/Taffy-GPT-SoVITS)   |     [AI 奶绿](https://www.modelscope.cn/studios/xzjosh/LAPLACE-GPT-SoVITS)     |
| [AI 阿梓](https://www.modelscope.cn/studios/xzjosh/Azusa-GPT-SoVITS)  |    [AI 七海](https://www.modelscope.cn/studios/xzjosh/Nana7mi-GPT-SoVITS)     | [AI 星瞳](https://www.modelscope.cn/studios/xzjosh/XingTong-GPT-SoVITS) | [AI 星瞳（坏女人）](https://www.modelscope.cn/studios/xzjosh/badXT-GPT-SoVITS) |
|   [AI 扇宝](https://www.modelscope.cn/studios/xzjosh/SB-GPT-SoVITS)   | [AI 扇宝（卖卖）](https://www.modelscope.cn/studios/xzjosh/maimai-GPT-SoVITS) |   [AI 尼奈](https://www.modelscope.cn/studios/xzjosh/nine-GPT-SoVITS)   |      [AI 恬豆](https://www.modelscope.cn/studios/xzjosh/Bekki-GPT-SoVITS)      |
|  [AI 向晚](https://www.modelscope.cn/studios/xzjosh/Ava-GPT-SoVITS)   |     [AI 贝拉](https://www.modelscope.cn/studios/xzjosh/Bella-GPT-SoVITS)      |  [AI 珈乐](https://www.modelscope.cn/studios/xzjosh/Carol-GPT-SoVITS)   |      [AI 嘉然](https://www.modelscope.cn/studios/xzjosh/Diana-GPT-SoVITS)      |
| [AI 乃琳](https://www.modelscope.cn/studios/xzjosh/Eileen-GPT-SoVITS) |                                                                               |                                                                         |                                                                                |

</details>

#### Huggingface 平台

<details><summary>点击展开</summary>

|                             模型名称                              |                                 模型名称                                  |                                  模型名称                                  |                              模型名称                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------------: | :------------------------------------------------------------------------: | :-----------------------------------------------------------------: |
|  [AI 电棍](https://huggingface.co/spaces/XzJosh/otto-GPT-SoVITS)  |      [AI 炫神](https://huggingface.co/spaces/XzJosh/Xuan-GPT-SoVITS)      |      [AI 山泥若](https://huggingface.co/spaces/XzJosh/Ruo-GPT-SoVITS)      | [AI 丁真](https://huggingface.co/spaces/XzJosh/dingzhen-GPT-SoVITS) |
| [AI 孙笑川](https://huggingface.co/spaces/XzJosh/sun-GPT-SoVITS)  |    [AI 东雪莲](https://huggingface.co/spaces/XzJosh/Azuma-GPT-SoVITS)     |      [AI 塔菲](https://huggingface.co/spaces/XzJosh/Taffy-GPT-SoVITS)      | [AI 奶绿](https://huggingface.co/spaces/XzJosh/LAPLACE-GPT-SoVITS)  |
| [AI 阿梓](https://huggingface.co/spaces/XzJosh/Azusa-GPT-SoVITS)  |    [AI 七海](https://huggingface.co/spaces/XzJosh/Nana7mi-GPT-SoVITS)     | [AI 星瞳（坏女人）](https://huggingface.co/spaces/XzJosh/badXT-GPT-SoVITS) | [AI 坏女人](https://huggingface.co/spaces/XzJosh/badXT-GPT-SoVITS)  |
|   [AI 扇宝](https://huggingface.co/spaces/XzJosh/SB-GPT-SoVITS)   | [AI 扇宝（卖卖）](https://huggingface.co/spaces/XzJosh/maimai-GPT-SoVITS) |      [AI 尼奈](https://huggingface.co/spaces/XzJosh/nine-GPT-SoVITS)       |  [AI 恬豆](https://huggingface.co/spaces/XzJosh/Bekki-GPT-SoVITS)   |
|  [AI 向晚](https://huggingface.co/spaces/XzJosh/Ava-GPT-SoVITS)   |     [AI 贝拉](https://huggingface.co/spaces/XzJosh/Bella-GPT-SoVITS)      |      [AI 珈乐](https://huggingface.co/spaces/XzJosh/Carol-GPT-SoVITS)      |  [AI 嘉然](https://huggingface.co/spaces/XzJosh/Diana-GPT-SoVITS)   |
| [AI 乃琳](https://huggingface.co/spaces/XzJosh/Eileen-GPT-SoVITS) |                                                                           |                                                                            |                                                                     |

</details>

### 🥕Fish-Audio

<details><summary>点击展开</summary>

|         模型名称         |        模型名称        |        模型名称         |         模型名称          |
| :----------------------: | :--------------------: | :---------------------: | :-----------------------: |
|           丁真           |        AD 学姐         |       纪录片旁白        |         永雏塔菲          |
|     POTUS 45 - Trump     |          流萤          |       七海みなみ        |           阿梓            |
|          芙宁娜          |          符玄          |        雷电将军         |          董宇辉           |
|          邓紫琪          |   丁真（锐刻五代版）   |        电棍 otto        |           派蒙            |
|          单田芳          |         扣比不         |          黑手           |        孙笑川 258         |
|       七海 Nana7mi       |          刻晴          |          钟离           |          冰糖 IO          |
|        李立宏美食        |       AI 沈子钧        |          黄泉           |           花火            |
|         棋手战鹰         |          弘历          |       明前奶绿 2        |          纳西妲           |
|         井芹仁菜         |         东雪莲         |     尼奈（猫娘版）      | Robin (Honkai: Star Rail) |
|           炫神           |        赤井秀一        |          银枝           |           砂金            |
|          巴图鲁          |          胡桃          |         明日香          |           空 1            |
|        花火导演 1        |          星瞳          |        旭旭宝宝         |          黑天鹅           |
|  亚太空间合作组织秘书长  |          温迪          |            1            |           尼奈            |
|         アルマ２         |         孙笑川         |        记者 2.0         |          希格雯           |
|           huhu           |          试试          |          唐僧           |            米             |
|          coco1           |        夹子米虫        |        包包大人         |         baicai_ZH         |
|            算            |          烟绯          |        男 2 常用        |     偶像大师 新田美波     |
|         枣伊吕波         |         亚托莉         |         罗永浩          |          佛耶戈           |
|          斯维因          |        布洛妮娅        |          小桃           |           扇宝            |
|          袁腾飞          |         东方镜         |          waner          |           管家            |
|        晶蓝研究室        |      Ageha Shama       |         古美门          |            nkl            |
|           md1            |       露早 GOGO        |        baicai_JP        |      青春恋物 纯爱酱      |
|          Sakura          |          卖卖          |         夏目蓝          |         小熊维尼          |
|         蓝斯报站         |           影           |         老母亲          |        企业宣传片         |
|      chouxiangping1      |          作曲          |           mm            |         农村生活          |
|        Meow Moew         |          ttt2          |          流萤           |            ali            |
|           jian           |          余切          |         战鹰 01         |          派蒙 1           |
|           多人           |      流浪者\_原神      |         qixuanm         |           扇宝            |
|          Qinlan          |          coco          |         安和昴          |           wannn           |
|         昆虫学者         |          记者          |          白露           |          艾丝妲           |
|           测试           |         姐姐 1         |        扣税国王         |        浊心斯卡蒂         |
|         明前奶绿         |           ？           |        菩提祖师         |         AI 李奥翔         |
|          周棋洛          |      奥尔菲斯 2.0      |           🥕            |          撒贝宁           |
|           全蛋           |        dongbei         |        溜溜 leo         |            WY             |
|          琳妮特          |          ling          |          MOSS           |          崔永元           |
|        明日方舟 W        |         夏提雅         |          陈冲           |           Negan           |
|          ID001           |         佛耶戈         |        汤圆四水         |          悟空 1           |
|          郑容和          |           dw           |           敖            |           文静            |
|          aishe           |       战场原黑仪       |          niao           |            我             |
|           测试           |        匠心帝。        |          雷军           |         神里绫华          |
|           tts            |         Within         |          藿藿           |          飞虎队           |
|           测试           |        阿里马斯        |          tttt           |           后羿            |
|          高松灯          |         相泽南         |          甘雨           |           ayane           |
|    June (The Finals)     |         张顺飞         |       明日方舟山        |         AI 何佳宇         |
|           hhjk           |       河原木桃香       |           xwy           |           星瞳            |
|          huawei          |          流萤          |           lu            |          邓女士           |
|         Natsuhi          |        爱莉希雅        |        露西（en         |      七濑胡桃中文 ai      |
|          大家好          |          阿兰          |           pzd           |           王二            |
|       Harold Finch       |         yanhe          |         LUO-002         |       温柔动听女声        |
|       Taylor Swift       |         包龙星         |     凯伦（实验版）      |            22             |
|        洛天依\_灵        |        次生银翼        |      爱衣休伯利安       |         露西（zh          |
|           awei           |     52ba 乌尔比安      |           gyh           |           卖卖            |
|         w 的声音         |         凯尔希         | 明日方舟 特雷西娅、魔王 |           Rupa            |
|            fy            |         liuliu         |         lamune          |           狗蛋            |
|           测试           |         高血压         |         xiaohua         |     霸道姐姐 sweetbox     |
|            qy            |         赵本山         |           Dr            |        大和田常务         |
|          Xixixi          |         邓浩洋         |          炫烨           |            雨             |
|         温柔女声         |          凤凤          |       MG 动画男声       |     毕业季温情女学生      |
|          boss3           |         刘德科         |          湖普           |      企业宣传片-大气      |
|          彩虹红          |        幽兰黛尔        |         胖宝宝          |            11             |
|        洛天依\_柔        |           WK           |      听不懂思密达       |  嘟嘟\_学校广播电台\_CN   |
|          波提欧          |           刃           |        剑先鹤城         |            令             |
|      东风谷早苗 mv       |        萨格尔王        |          男 1           |            pjs            |
|           夏生           |         田二喜         |          dons           |          无添加           |
|            md            |          test          |           WKR           |          大司马           |
|      陈功的声音模型      |         测试 1         |           me            |            lze            |
|           男 1           |          ling          |       二次元妲己        |            凡             |
|        Freeind AI        |          test          |  大家的日语中级 1 阅读  |            JJ             |
|        Max テスト        |         henry          |          暗人           |           阿星            |
|          tstt2           |          test          |        憨堡 Ger         |            hou            |
|           moss           |         slang          |         李素裳          |         独人十三          |
|           liu            |           33           |          test           |         永雏小菲          |
|      丹花伊吹 ibkui      |           1            |          9729           |         广西大师          |
|           9729           |          小孩          |        迪奥娜 ZH        |    Scotty (The Finals)    |
|            8             |          boss          |          包子           |           扇宝            |
|           络希           |          007           |          嘉然           |         AI 李奥翔         |
|          beagle          |        海老塚智        |           司            |          测试 1           |
|            1             |        奥尔菲斯        |           33            |          老叶 2           |
|          周星驰          |         安仁 2         |          发姐           |       Ngo Lan Huong       |
|          ouyang          |          ces           |           mfq           |        瓶子君 152         |
|           Mun            |       瓶子君 152       |          鱼头           |           SELF            |
|          个人 C          |        Sheldon         |          萧炎           |            wan            |
|         然然 2.0         |          科比          |        维什戴尔         |           然然            |
|     jingxiangshuiyi      |        marklin         |           JJJ           |         ele_read          |
|          xm_01           |        抖音米敏        |          自己           |        测试单田芳         |
|            y             |           1            |            1            |           6653            |
|          芙宁娜          |        jackzou         |      北方老师的话       |         没有没有          |
|           康辉           |         董宇辉         |     芽衣\_雷之律者      |    琪亚娜\_薪炎之律者     |
|         梅比乌斯         |          凯文          |       夏提雅中文        |            gmz            |
|        My Voice 2        |        My Voice        |           rui           |           测试            |
|            2             |          222           |          1111           |       logos 逻各斯        |
|           测试           | 嘟嘟\_商超女播报员\_CN |           xjp           |            hjj            |
|            ll            |         Negan          |         小孩 ZH         |          萌小天           |
|       fisher_test1       |       莹凡的声音       |          米诺           |           hiyo            |
| 2024.01.27 旅行骑士 CPA1 |         Y10REO         |        哈哈哈哈         |        鱿鱼安静吗         |
|           小 U           |          居居          |          居居           |          袁腾飞           |
|          梁宏达          |        阿波尼亚        |        萝莎莉娅         |          菲谢尔           |
|           莱尔           |         莉莉娅         |         苏莎娜          |            苏             |
|           芽衣           |         缇米朵         |         维尔薇          |      符华\_识之律者       |
|      符华\_云墨丹心      |          符华          |         科斯魔          |     琪亚娜\_空之律者      |
|          琪亚娜          |        狂热蓝调        |          爱衣           |           渡鸦            |
|          格蕾修          |    德丽莎\_月下初拥    |         德丽莎          |        帕朵菲莉丝         |
|         希儿\_黑         |          希儿          |   布洛妮娅\_迷城骇兔    |    布洛妮娅\_次生银翼     |
|         布洛妮娅         |     姬子\_极地战刃     |          姬子           |          卡萝尔           |
|           卡莲           |          千劫          |         八重樱          |           伊甸            |
|        人偶\_赤鸢        |       人偶\_贝拉       |       人偶\_西琳        |        人偶\_若水         |
|        人偶\_苍玄        |      人偶\_绯玉丸      |    人偶\_特斯拉 Zero    |        人偶\_爱酱         |
|     人偶\_晓月镇魂歌     |     人偶\_妖精爱莉     |   人偶\_圣剑幽兰黛尔    |       人偶\_克莱因        |
|       人偶\_仿犹大       |          丽塔          |          主角           |     June (The Finals)     |

</details>

## 常见问题

1. 合成失败，请检查角色名与文本内容
   - 检查当前使用的源和模型是否存在这个角色，角色名是否正确

## 支持与贡献

如果你喜欢这个项目，请不妨点个 Star🌟，这是对开发者最大的动力， 当然，你可以对我 [爱发电](https://afdian.net/a/sumoqi) 赞助，呜咪~❤️

有意见或者建议也欢迎提交 [Issues](https://github.com/erzaozi/vits-plugin/issues) 和 [Pull requests](https://github.com/erzaozi/vits-plugin/pulls)。

## 相关项目

- [Bert-VITS2](https://github.com/fishaudio/Bert-VITS2)：vits2 backbone with multilingual-bert
- [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)：1 min voice data can also be used to train a good TTS model! (few shot voice cloning)
- [Fish-Audio](https://fish.audio)：Brand new TTS solution

## 许可证

本项目使用 [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) 作为开源许可证。
