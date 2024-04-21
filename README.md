![vits-plugin](https://socialify.git.ci/erzaozi/vits-plugin/image?description=1&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)

<img decoding="async" align=right src="resources/readme/girl.png" width="35%">

# VITS-PLUGIN 🍇

- 一个适用于 [Yunzai 系列机器人框架](https://github.com/yhArcadia/Yunzai-Bot-plugins-index) 的的 AI 语音合成插件，让你能够在机器人中使用 AI 语音合成功能

- 使用著名 AI 社区 [Huggingface](https://huggingface.co/) 和国内知名 AI 社区 [Modelscope](https://www.modelscope.cn/) 的接口，支持 BERT-VITS2、GPT-SoVITS、Genshin-TTS 等模型，对自身硬件没有要求，降低了使用门槛，让更多人体验 AI 语音合成的乐趣。

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
└───Genshin-TTS
    └───Modelscope.json
```

要使用对应模型才能使用对应源中的发音人，举个例子，使用 `Bert-VITS2` 模型时能选择 `Modelscope` 和 `Huggingface` 两个源；而使用 `Genshin-TTS` 只能选择 `Modelscope` 一个源，即便源的名字相同，但不同模型的源是完全不一样的，里面的发音人也不一样，请参考下表找到你想要的发音人位置

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

### 🥕Genshin-TTS

#### Modelscope 平台

<details><summary>点击展开</summary>

|  模型名称  |  模型名称  |   模型名称   |   模型名称   |
| :--------: | :--------: | :----------: | :----------: |
|    派蒙    |   纳西妲   |     凯亚     |     温迪     |
|   娜维娅   |  荒泷一斗  |    阿贝多    |     钟离     |
|  枫原万叶  |  那维莱特  |   艾尔海森   |   八重神子   |
|   芙宁娜   |    宵宫    |    迪希雅    |    提纳里    |
|    林尼    |   莱依拉   |     卡维     |    诺艾尔    |
|    赛诺    |    托马    |     莫娜     |   神里绫华   |
|    凝光    |    北斗    |    迪奥娜    |     可莉     |
|    柯莱    |    丽莎    |   莱欧斯利   |    琳妮特    |
|    五郎    |   芭芭拉   |   雷电将军   |  珊瑚宫心海  |
|     魈     |     琴     |     胡桃     |     砂糖     |
| 鹿野院平藏 |    安柏    |     重云     |     夜兰     |
|  达达利亚  |   班尼特   |     妮露     |     香菱     |
|   珐露珊   |   迪卢克   |     刻晴     |     烟绯     |
|    辛焱    |    早柚    |    夏洛蒂    |    夏沃蕾    |
|    优菈    |    云堇    |    久岐忍    |   神里绫人   |
|    甘雨    |   流浪者   |     行秋     |     千织     |
| 戴因斯雷布 |    闲云    |     白术     |    菲谢尔    |
|    申鹤    |  九条裟罗  |     雷泽     |      荧      |
|     空     |    嘉明    |    菲米尼    |     多莉     |
|  迪娜泽黛  |   凯瑟琳   |    绮良良    |   罗莎莉亚   |
|    米卡    |   坎蒂丝   |    萍姥姥    | 留云借风真君 |
|   爱贝尔   |   伊迪娅   |     瑶瑶     |     七七     |
|   式大将   |    奥兹    |    泽维尔    |     哲平     |
|   大肉丸   |    托克    |   蒂玛乌斯   |    塞琉斯    |
|   欧菲妮   |    昆钧    |     言笑     |     仆人     |
|   迈勒斯   |   希格雯   |    拉赫曼    |    杜拉夫    |
|  克洛琳德  |  伊利亚斯  |    爱德琳    |    玛乔丽    |
|   柊千里   |  九条镰治  |    塞塔蕾    |    海芭夏    |
| 笼钓瓶一心 |    叶德    |    卡莉露    |    查尔斯    |
|    莎拉    |  玛格丽特  |     博来     |    纳比尔    |
|   迪尔菲   |    康纳    |    玛塞勒    |     博士     |
|    宛烟    | 羽生田千鹤 |    海妮耶    |     天叔     |
|  鹿野奈奈  | 一心传名刀 |    弗洛朗    |    舒伯特    |
|    莺儿    |    龙二    |    梅里埃    |   芙卡洛斯   |
|    嘉良    |    珊瑚    |    久利须    |   费迪南德   |
|    嘉玛    |   艾伯特   |   天目十五   |     女士     |
|   丹吉尔   |  白老先生  |    吴船长    |    巴达维    |
|    拉齐    |    长生    |   莫塞伊思   |    杜吉耶    |
|   斯坦利   |    百闻    | 掇星攫辰天君 |     迈蒙     |
|    博易    |  花角玉将  |     知易     |     上杉     |
|  大慈树王  |   田铁嘴   |    常九爷    |    西拉杰    |
|   沙扎曼   |  深渊使徒  |     安西     |    三月七    |
|    丹恒    |   瓦尔特   |     希儿     |    希露瓦    |
|   娜塔莎   |  布洛妮娅  |     佩拉     |     砂金     |
|    素裳    |    虎克    |     姬子     |      穹      |
|     星     |    符玄    |     白露     |    克拉拉    |
|   杰帕德   |    景元    |     藿藿     |    黑天鹅    |
|    桑博    |    黄泉    |    卡芙卡    |    艾丝妲    |
|    流萤    |   桂乃芬   |     托帕     |   真理医生   |
|    彦卿    |    黑塔    |     驭空     |     停云     |
|    玲可    |    镜流    |     罗刹     |     银狼     |
|   阮•梅    |    青雀    |     阿兰     |     米沙     |
|    浮烟    |    帕姆    |   螺丝咕姆   |    加拉赫    |
|    卢卡    |   史瓦罗   |     明曦     |     寒鸦     |
|    雪衣    |    银枝    |     晴霓     |     丹枢     |
|   星期日   |    尾巴    |     花火     |   可可利亚   |
|    青镞    |    半夏    |      刃      |     霄翰     |
|    信使    |  卡卡瓦夏  |   钟表小子   |     岩明     |
|    浣溪    |   知更鸟   |     Lumi     |              |

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
- [Genshin-TTS](https://bv2.firefly.matce.cn)：原神 & 星穹铁道在线语音合成

## 许可证

本项目使用 [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) 作为开源许可证。
