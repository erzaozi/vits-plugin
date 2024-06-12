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

<details> <summary>获取 Modelscope Cookie</summary>

1. 打开 [随便一个需要登录才能使用的空间](https://www.modelscope.cn/studios/xzjosh/DZ-Bert-VITS2-2.3/summary) 并登录，`Ctrl + Shift + I` 打开开发者工具 ，点击 `网络`
2. 等待出现 `status` 请求，点击该请求，复制 `Cookie` 字段即可（注意复制完整）

![cookie](https://github.com/erzaozi/vits-plugin/assets/61369914/1501ff49-b6d4-4434-b449-13fa44d23b38)

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

|          模型名称          |      模型名称       |         模型名称         |        模型名称         |
| :------------------------: | :-----------------: | :----------------------: | :---------------------: |
|          广大\_ZH          |      秋泉红叶       |    塔杰·拉德卡尼\_ZH     |      伽吠毗陀\_ZH       |
|          白露\_ZH          |      驭空\_ZH       |        绿芙蓉\_ZH        |        阿往\_ZH         |
|        室笠朱音(茜)        |    维多利亚\_ZH     |         妮露\_ZH         |       朝比奈菲娜        |
|       谢赫祖拜尔\_ZH       |      锭前纱织       |         博士\_ZH         |       迈勒斯\_ZH        |
|           空\_ZH           |     忧（泳装）      |         尾刃康娜         |        阿晃\_ZH         |
|         轰大叔\_ZH         |  理水叠山真君\_ZH   |         飞鸟马时         |       侍从丙\_ZH        |
|          狐坂若藻          |    严苛评委\_ZH     |       瓦乐瑞娜\_ZH       |       拉伊德\_ZH        |
|          圣园未花          | 卡卡瓦夏的姐姐\_ZH  |          乙花堇          |      花角玉将\_ZH       |
|          停云\_ZH          |      夜兰\_ZH       |         流萤\_ZH         |        槌永日和         |
|          珊瑚\_ZH          |      才羽桃井       |         食蜂操祈         |      玛格丽特\_ZH       |
|          朝颜花江          |    佐西摩斯\_ZH     |          悦\_ZH          |     消沉的患者\_ZH      |
|          莎拉\_ZH          |   造物翻译官\_ZH    |         大毫\_ZH         |        角楯花凛         |
|          鳄渊明里          |    和香（温泉）     |        玛塞勒\_ZH        |        雅各\_ZH         |
|         杜吉耶\_ZH         |     艾米绮\_ZH      |        海芭夏\_ZH        |        松浦\_ZH         |
|         埃洛伊\_ZH         |    螺丝咕姆\_ZH     |         拉齐\_ZH         |       鬼方佳代子        |
|          巫女\_ZH          |      连烟\_ZH       |         奥兹\_ZH         |      德沃沙克\_ZH       |
|          札齐\_ZH          |      浣溪\_ZH       |         捕快\_ZH         |        胡尚\_ZH         |
|          手岛\_ZH          |      烟绯\_ZH       |      鹿野院平藏\_ZH      |       科拉莉\_ZH        |
|          丹花伊吹          |     加福尔\_ZH      |     星际和平播报\_ZH     |       杰洛尼\_ZH        |
|         金忽律\_ZH         |     洛伦佐\_ZH      |         警长\_ZH         |      伊织（泳装）       |
|         旅行者\_ZH         |      多莉\_ZH       |         乌维\_ZH         |        闲云\_ZH         |
|          嘉义\_ZH          |     希露瓦\_ZH      |       巨大谜钟\_ZH       |        间宵时雨         |
|         齐米亚\_ZH         |      薇尔\_ZH       |       深渊法师\_ZH       |        风仓萌绘         |
|          狮子堂泉          |   歌原（应援团）    |        斯嘉莉\_ZH        |        美甘尼禄         |
|           琴\_ZH           |    日奈（泳装）     |        阿贝多\_ZH        |        迈蒙\_ZH         |
|        埃斯蒙德\_ZH        |       古关忧        |        维尔德\_ZH        |      蒂玛乌斯\_ZH       |
|         克拉拉\_ZH         |      高善\_ZH       |       荒泷一斗\_ZH       |       维卡斯\_ZH        |
|          净砚\_ZH          |   菲尔戈黛特\_ZH    |           莫弈           |     温和的声音\_ZH      |
|          朱城瑠美          |      不破莲华       |         村田\_ZH         |        泽田\_ZH         |
|         希格雯\_ZH         |     伊迪娅\_ZH      |        独孤朔\_ZH        |        沙寅\_ZH         |
|         欧菲妮\_ZH         |      迪肯\_ZH       |         托帕\_ZH         |       费索勒\_ZH        |
|          希儿\_ZH          |      赤司纯子       |        毗伽尔\_ZH        |       钟表匠\_ZH        |
|          桐生桔梗          |      安柏\_ZH       |        流浪者\_ZH        |        甘雨\_ZH         |
|         田铁嘴\_ZH         |   黑泽京之介\_ZH    |         岩明\_ZH         |        北斗\_ZH         |
|           葵\_ZH           |  暮夜剧团团长\_ZH   |         小川\_ZH         |      神里绫人\_ZH       |
|         葛瑞丝\_ZH         |    枫香（正月）     |        塔里克\_ZH        |    剑阵中的声音\_ZH     |
|          久田泉奈          |     艾洛迪\_ZH      |      贝雅特丽奇\_ZH      |        康纳\_ZH         |
|         圆堂志美子         |    真白（泳装）     |         千织\_ZH         |        重云\_ZH         |
|          凝光\_ZH          |   年幼的孩子\_ZH    |       美游（泳装）       |        天雨亚子         |
|         阿洛瓦\_ZH         |      伊庭\_ZH       |         托克\_ZH         |        萨姆\_ZH         |
|          花冈柚子          |    稻城萤美\_ZH     |         侯章\_ZH         |       天童爱丽丝        |
|         阿佩普\_ZH         |    九条裟罗\_ZH     |        阿尼斯\_ZH        |        歌蒂\_ZH         |
|         斯薇塔\_ZH         |      七七\_ZH       |         托马\_ZH         |        淮安\_ZH         |
|          戒野美咲          |      邓恩\_ZH       |         浮烟\_ZH         |       里卡尔\_ZH        |
|        九条镰治\_ZH        |     罗伊斯\_ZH      |       白子（泳装）       |      木南杏奈\_ZH       |
|         艾迪恩\_ZH         |   莲见（体操服）    |     药王秘传魁首\_ZH     |       连河切里诺        |
|           才羽绿           |    芙卡洛斯\_ZH     |         景元\_ZH         |        幻胧\_ZH         |
|           佐城巴           |      黑见芹香       |         叶德\_ZH         |        翡翠\_ZH         |
|        冥火大公\_ZH        |      老戴\_ZH       |         爱清枫香         |     佳代子（正月）      |
|        寒腿叔叔\_ZH        |      天叔\_ZH       |        塞德娜\_ZH        |        耕一\_ZH         |
|          银狼\_ZH          |      魔女 N_ZH      |        小仓澪\_ZH        |       科林斯\_ZH        |
|          姬木梅露          |      古田\_ZH       |         商人\_ZH         |      回声海螺\_ZH       |
|         奥泰巴\_ZH         |       魈\_ZH        |       长门幸子\_ZH       |      天目十五\_ZH       |
|           柚岛夏           |       猫塚响        |        加拉赫\_ZH        |        伊落玛丽         |
|         维利特\_ZH         |      查宝\_ZH       |        卡莉露\_ZH        |       萨齐因\_ZH        |
| 拉格沃克•夏尔•米哈伊尔\_ZH |     纳比尔\_ZH      |      一心传名刀\_ZH      |       阿娜耶\_ZH        |
|          伊草遥香          |     维格尔\_ZH      |          扇喜葵          |      柚子（女仆）       |
|          凯亚\_ZH          |     娜塔莎\_ZH      |        梓（泳装）        |        莺儿\_ZH         |
|          阿圆\_ZH          |    莫塞伊思\_ZH     |        西尔弗\_ZH        |      瑞安维尔\_ZH       |
|         凯西娅\_ZH         |     老芬奇\_ZH      |         白术\_ZH         |       卡莉娜\_ZH        |
|          宁禄\_ZH          |     波提欧\_ZH      |         洛恩\_ZH         |        鬼怒川霞         |
|          小涂真纪          |      枣伊吕波       |         早濑优香         |     刻薄的小孩\_ZH      |
|        八重神子\_ZH        |    伊德里西\_ZH     |        福尔茨\_ZH        |       帕维耶\_ZH        |
|        静子（泳装）        |      艾文\_ZH       |         玲可\_ZH         |      石头老板\_ZH       |
|         莱斯格\_ZH         |     菲谢尔\_ZH      |         元太\_ZH         |      克列门特\_ZH       |
|          仲正一花          |       桐藤渚        |       泉奈（泳装）       |        云堇\_ZH         |
|          小贩\_ZH          | 拍卖会工作人员\_ZH  |       今谷香里\_ZH       |        女声\_ZH         |
|        芹香（正月）        |     乔瓦尼\_ZH      |         黑馆晴奈         |     日富美（泳装）      |
|          接笏\_ZH          |      石头\_ZH       |        杜拉夫\_ZH        |       黑天鹅\_ZH        |
|          半夏\_ZH          |      木村\_ZH       |       芹奈（圣诞）       |        望雅\_ZH         |
|        阿尔卡米\_ZH        |     维尔芒\_ZH      |         立本\_ZH         |        云叔\_ZH         |
|     七叶寂照秘密主\_ZH     |    莱欧斯利\_ZH     |        居勒什\_ZH        |         刃\_ZH          |
|          月雪宫子          |      安守实里       |         木木\_ZH         |        行秋\_ZH         |
|      猎犬家系成员\_ZH      |     爱德琳\_ZH      |        阮•梅\_ZH         |        理村爱理         |
|          温迪\_ZH          |     韦尔纳\_ZH      |         砂金\_ZH         |       沙扎曼\_ZH        |
|          恶龙\_ZH          |    神里绫华\_ZH     |       枫原万叶\_ZH       |        胡桃\_ZH         |
|        费迪南德\_ZH        |      阿鸠\_ZH       |         黑塔\_ZH         |       迪希雅\_ZH        |
|        睦月（正月）        |    丹恒•饮月\_ZH    |       雷电将军\_ZH       | 浮游风蕈兽·元素生命\_ZH |
|       尼禄（兔女郎）       |    托帕&账账\_ZH    |         悠策\_ZH         |       镜中人\_ZH        |
|       佩尔西科夫\_ZH       |     朔次郎\_ZH      |        夏沃蕾\_ZH        |        香菱\_ZH         |
|         艾丝妲\_ZH         |    时（兔女郎）     |         五郎\_ZH         |       奥列格\_ZH        |
|         玛达赫\_ZH         |     绮良良\_ZH      |       白老先生\_ZH       |        羽沼真琴         |
|         艾莉丝\_ZH         |     纳菲斯\_ZH      |         恕筠\_ZH         |        钟离\_ZH         |
|          吉莲\_ZH          |      嘉玛\_ZH       |        娜比雅\_ZH        |        歌住樱子         |
|          霞泽美游          |   怀疑的患者\_ZH    |     冒失的帕拉德\_ZH     |        唐娜\_ZH         |
|          宵宫\_ZH          |     琳妮特\_ZH      |        常九爷\_ZH        |       小野寺\_ZH        |
|        艾尔海森\_ZH        |      诗筠\_ZH       |         柯莱\_ZH         |       巴穆恩\_ZH        |
|       安静的宾客\_ZH       |      黛比\_ZH       |         知易\_ZH         |      薇若妮卡\_ZH       |
|          浅黄睦月          |      赛诺\_ZH       |         静山真白         |        宏达\_ZH         |
|           白洲梓           |     阿拉夫\_ZH      |          千鸟满          |       芭芭拉\_ZH        |
|         asideb_ZH          |     久利须\_ZH      |          星\_ZH          |       劳伦斯\_ZH        |
|          夏妮\_ZH          |     筑梦师\_ZH      |       深渊使徒\_ZH       |     笼钓瓶一心\_ZH      |
|         新之丞\_ZH         |     斯坦利\_ZH      |        梅里埃\_ZH        |       提纳里\_ZH        |
|         合欢垣吹雪         |    阿巴图伊\_ZH     |         林尼\_ZH         |        向导\_ZH         |
|          砂糖\_ZH          |    迪娜泽黛\_ZH     |         德田\_ZH         |        丹枢\_ZH         |
|         劳维克\_ZH         |     维多克\_ZH      |        和元泉艾米        |        明星日鞠         |
|         吴船长\_ZH         |     巴达维\_ZH      |      年长的患者\_ZH      |        阿祇\_ZH         |
|       珊瑚宫心海\_ZH       |     伦纳德\_ZH      |        霄老大\_ZH        |       贾拉康\_ZH        |
|         凯瑟琳\_ZH         |     迪卢克\_ZH      |        法拉娜\_ZH        |        埃德\_ZH         |
|        阿蕾奇诺\_ZH        |      霄翰\_ZH       |       巴蒂斯特\_ZH       |       丹吉尔\_ZH        |
|        德拉萝诗\_ZH        |     丝柯克\_ZH      |       鹤城（泳装）       |       查尔斯\_ZH        |
|       花凛（兔女郎）       |      百闻\_ZH       |       千世（泳装）       |        梦主\_ZH         |
|       优香（体操服）       |      绘星\_ZH       |         申鹤\_ZH         |       娜维娅\_ZH        |
|         埃舍尔\_ZH         |      莫娜\_ZH       |         河和静子         |        丹羽\_ZH         |
|        阿斯法德\_ZH        |     大肉丸\_ZH      |        小鸟游星野        |        砂狼白子         |
|        乐平波琳\_ZH        |      光之\_ZH       |       罗莎莉亚\_ZH       |        公主\_ZH         |
|         贡达法\_ZH         |     紫月季\_ZH      |   焦躁的丹鼎司医士\_ZH   |         近卫南          |
|          中务桐乃          |      杰克\_ZH       |       阿露（正月）       |        初音未来         |
|         克罗索\_ZH         |     埃勒曼\_ZH      |      羽生田千鹤\_ZH      |       有乐斋\_ZH        |
|          男声\_ZH          |     莱依拉\_ZH      |           夏彦           |        艾丽\_ZH         |
|          佩拉\_ZH          |     阿扎木\_ZH      |         虎克\_ZH         |        若心\_ZH         |
|          漱玉\_ZH          |      罗刹\_ZH       |        艾薇拉\_ZH        |      萨赫哈蒂\_ZH       |
|          剑先鹤城          |  削月筑阳真君\_ZH   |         波洛\_ZH         |       爱贝尔\_ZH        |
|      炒冷饭机器人\_ZH      |      岩夫\_ZH       |      奇怪的云骑\_ZH      |       塞琉斯\_ZH        |
|          米沙\_ZH          |  明日奈（兔女郎）   |        柊千里\_ZH        |        星稀\_ZH         |
|         阿山婆\_ZH         |      琳琅\_ZH       |        舒伯特\_ZH        |       星期日\_ZH        |
|          若叶日向          |      阿旭\_ZH       |         玛吉\_ZH         |        米凯\_ZH         |
|         卡萝蕾\_ZH         |    伊利亚斯\_ZH     | 浮游水蕈兽·元素生命\_ZH  |        桑上果穗         |
|        钟表小子\_ZH        |     大和田\_ZH      |         素裳\_ZH         |        特纳\_ZH         |
|          丹恒\_ZH          |     库斯图\_ZH      |        克雷薇\_ZH        |        朋义\_ZH         |
|         纳西妲\_ZH         |      平山\_ZH       |         藿藿\_ZH         |       娜德瓦\_ZH        |
|          各务千寻          |     诺艾尔\_ZH      |        芙萝拉\_ZH        |        宛烟\_ZH         |
|        今谷佳祐\_ZH        |     徐六石\_ZH      |        卯师傅\_ZH        |        银杏\_ZH         |
|          青镞\_ZH          |     巴哈利\_ZH      |         慧心\_ZH         |         铜花瞬          |
|        白子（骑行）        |      梁沐\_ZH       |         博易\_ZH         |        空崎日奈         |
|        独眼小僧\_ZH        |     芙宁娜\_ZH      |       一之濑明日奈       |       迪奥娜\_ZH        |
|         露尔薇\_ZH         |   戴因斯雷布\_ZH    |         黑崎小雪         |        佐天泪子         |
|          冰室濑名          |      羽川莲见       |         药子纱绫         |       泽维尔\_ZH        |
|         卡布斯\_ZH         |      小乐\_ZH       |         卓也\_ZH         |       知更鸟\_ZH        |
|       嚣张的小孩\_ZH       |       陆景和        |        基娅拉\_ZH        |       法哈德\_ZH        |
|         海妮耶\_ZH         |      浦和花子       |          下仓惠          |        玥辉\_ZH         |
|         伊萨克\_ZH         |     菲约尔\_ZH      |       克洛琳德\_ZH       |        雷泽\_ZH         |
|           春日椿           |    西衍先生\_ZH     |      界种科科员\_ZH      |       帕斯卡\_ZH        |
|         舍利夫\_ZH         |  醉醺醺的宾客\_ZH   |        麦希尔\_ZH        |       拉赫曼\_ZH        |
|        响（应援团）        |      竺子\_ZH       |       今谷三郎\_ZH       |        辛焱\_ZH         |
|         赛索斯\_ZH         |    鹿野奈奈\_ZH     |         杏山和纱         |        重佐\_ZH         |
|           空井咲           |    加藤洋平\_ZH     |          勇美枫          |        芷巧\_ZH         |
|          优菈\_ZH          |      白石歌原       |         阿兰\_ZH         |       迪尔菲\_ZH        |
|         斯科特\_ZH         | 祖莉亚·德斯特雷\_ZH |         符玄\_ZH         |      真理医生\_ZH       |
|          江蓠\_ZH          |      古山\_ZH       |         一平\_ZH         |       尤利安\_ZH        |
|           穹\_ZH           |     霍夫曼\_ZH      |         寒鸦\_ZH         |        嘉良\_ZH         |
|          纯也\_ZH          |      桑博\_ZH       |         尾巴\_ZH         |      可可利亚\_ZH       |
|         桂乃芬\_ZH         |     萍姥姥\_ZH      |        坎蒂丝\_ZH        |       铁尔南\_ZH        |
|        纯水精灵\_ZH        |      阿幸\_ZH       |         瑶瑶\_ZH         |        奥空绫音         |
|          阿雩\_ZH          |     蒂埃里\_ZH      |         早柚\_ZH         |        女士\_ZH         |
|         阿夫辛\_ZH         |      厨子\_ZH       |         天见和香         |        阿守\_ZH         |
|         马姆杜\_ZH         |      黄泉\_ZH       |         黑田\_ZH         |      埃尔欣根\_ZH       |
|          李丁\_ZH          |      彦卿\_ZH       |         镜流\_ZH         |    记忆中的声音\_ZH     |
|         咲（泳装）         |      水羽三森       |         上杉\_ZH         |       shajinma_ZH       |
|         夏洛蒂\_ZH         |     玛乔丽\_ZH      |       考特里亚\_ZH       |        刻晴\_ZH         |
|         鲁哈维\_ZH         |     西拉杰\_ZH      | 有原则的猎犬家系成员\_ZH |        智树\_ZH         |
|          可莉\_ZH          |     池仓玛丽娜      |        式大将\_ZH        |        御坂美琴         |
|       冷漠的男性\_ZH       |      青雀\_ZH       |       达达利亚\_ZH       |       久岐忍\_ZH        |
|         西瓦尼\_ZH         |      卡维\_ZH       |        伊原木好美        |        苍森美弥         |
|         珐露珊\_ZH         |      埃泽\_ZH       |         捕头\_ZH         |      伯恩哈德\_ZH       |
|        尤苏波夫\_ZH        |    遥香（正月）     |        瓦尔特\_ZH        |       沃特林\_ZH        |
|         班尼特\_ZH         |    阿慈谷日富美     |        科尔特\_ZH        |    留云借风真君\_ZH     |
| 陆行岩本真蕈·元素生命\_ZH  |      帕姆\_ZH       |       若藻（泳装）       |        丽莎\_ZH         |
|          昆钧\_ZH          |     加萨尼\_ZH      |       勘解由小路紫       |       菲米尼\_ZH        |
|          雪衣\_ZH          |     法伊兹\_ZH      |         宇泽玲纱         |        商华\_ZH         |
|          艾伦\_ZH          |      丰见小鸟       |       那维莱特\_ZH       |       艾伯特\_ZH        |
|      长野原龙之介\_ZH      |   慈祥的女声\_ZH    |        辛克尔\_ZH        |        晴霓\_ZH         |
|           春原瞬           |    安东尼娜\_ZH     |         露子\_ZH         |        韵宁\_ZH         |
|       爱德华医生\_ZH       |  自称渊上之物\_ZH   |         燕翠\_ZH         |       华劳斯\_ZH        |
|          春原心奈          |      艾琳\_ZH       |        卡芙卡\_ZH        |       茂才公\_ZH        |
|            左然            |  发抖的流浪者\_ZH   |         旁白\_ZH         |        安西\_ZH         |
|        垃垃撕圾\_ZH        |    大慈树王\_ZH     |      讨嫌的小孩\_ZH      |      金人会长\_ZH       |
|          老孟\_ZH          |   忠诚的侍从\_ZH    |         阿来\_ZH         |        守月铃美         |
|        莱提西娅\_ZH        |      皮特\_ZH       |         音濑小玉         |        长生\_ZH         |
|        布洛妮娅\_ZH        |   爱丽丝（女仆）    |         嘉明\_ZH         |       塞塔蕾\_ZH        |
|        会场广播\_ZH        |      花火\_ZH       |         隐书\_ZH         |        岚姐\_ZH         |
|         阿扎尔\_ZH         |     卡波特\_ZH      |         秤亚津子         |        莱昂\_ZH         |
|          明曦\_ZH          |      银枝\_ZH       |      被俘的信徒\_ZH      |    掇星攫辰天君\_ZH     |
|          鹫见芹奈          |      珠函\_ZH       |       阿汉格尔\_ZH       |       史瓦罗\_ZH        |
|         拍卖师\_ZH         |     引导员\_ZH      |         米卡\_ZH         |        牛牧朱莉         |
|          远黛\_ZH          |       荧\_ZH        |       伊丝黛莱\_ZH       |        姬子\_ZH         |
|          荒谷\_ZH          |      火宫千夏       |         百识\_ZH         |        银镜伊织         |
|        公输师傅\_ZH        |    星野（泳装）     |         狐妖\_ZH         |        龙二\_ZH         |
|        帮派老大\_ZH        |      言笑\_ZH       |         生盐诺亚         |        理查\_ZH         |
|          信使\_ZH          |  塞萨尔的日记\_ZH   |         卢卡\_ZH         |       亚卡巴\_ZH        |
|        宫子（泳装）        |      博来\_ZH       |        副警长\_ZH        |       十六夜野宫        |
|         弗洛朗\_ZH         |  守护者的意志\_ZH   |        伊莎朵\_ZH        |        派蒙\_ZH         |
|          大野月咏          |    玻瑞亚斯\_ZH     |        陸八魔阿露        |      奇妙的船\_ZH       |
|          哲平\_ZH          |       小钩晴        |         下江小春         |       费斯曼\_ZH        |
|        卡卡瓦夏\_ZH        |     贝努瓦\_ZH      |      苍老的声音\_ZH      |       卡西迪\_ZH        |
|          阿伟\_ZH          |     三月七\_ZH      |        杰帕德\_ZH        |                         |

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
