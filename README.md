![vits-plugin](https://socialify.git.ci/erzaozi/vits-plugin/image?description=1&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)

<img decoding="async" align=right src="resources/readme/girl.png" width="35%">

# VITS-PLUGIN 🍇

- 一个适用于 [Yunzai 系列机器人框架](https://github.com/yhArcadia/Yunzai-Bot-plugins-index) 的的 AI 语音合成插件，让你能够在机器人中使用 AI 语音合成功能

- 使用著名 AI 社区 [Huggingface](https://huggingface.co/) 和国内知名 AI 社区 [Modelscope](https://www.modelscope.cn/) 的接口，对自身硬件没有要求，降低了使用门槛，让更多人体验 AI 语音合成的乐趣。

- **使用中遇到问题请加 QQ 群咨询：[707331865](https://qm.qq.com/q/TXTIS9KhO2)**

> [!TIP]
> 在朋友们的呼声下 [CikeyQi](https://github.com/CikeyQi) 决定开发这个插件，为了降低使用门槛，该插件搜罗当前互联网中可以直接免费使用的接口，并将其打包进插件中，让用户能够直接在机器人中使用这些接口，这个插件超棒的噢。

## 安装插件

#### 1. 克隆仓库

```
git clone https://github.com/erzaozi/vits-plugin.git ./plugins/vits-plugin
```

> [!NOTE]
> 如果你的网络环境较差，无法连接到 Github，可以使用 [GitHub Proxy](https://ghp.ci/) 提供的文件代理加速下载服务
>
> ```
> git clone https://ghp.ci/https://github.com/erzaozi/vits-plugin.git ./plugins/vits-plugin
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
└───AI-Hobbyist
    └───AI-Hobbyist.json
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

### 🥕AI Hobbyist

<details><summary>点击展开</summary>

**如果想帮助 AI Hobbyist 的免费语音合成网站运行下去，可以通过该爱发电赞助：https://afdian.com/a/baicai1145**

|                模型名称                |      模型名称      |              模型名称              |     模型名称     |
| :------------------------------------: | :----------------: | :--------------------------------: | :--------------: |
|                 Fairy                  |       11 号        |                七七                |      三月七      |
|                  丹恒                  |        丽塔        |                丽娜                |       丽莎       |
|                 久岐忍                 |      乔普师傅      |              九条裟罗              |       云堇       |
|                  云璃                  |        五郎        |                亚莎                |       伊甸       |
|          伏特加女孩\_狂热蓝调          | 伏特加女孩\_莉莉娅 |        伏特加女孩\_萝莎莉娅        |       优菈       |
|                  佩拉                  |        停云        |               克拉拉               |     克洛琳德     |
|                 八重樱                 |      八重神子      |                凝光                |       凯亚       |
|                 凯瑟琳                 |         刃         |                刻晴                |       刻晴       |
|                 加拉赫                 |        北斗        |                千织                |       卡维       |
|                 卡芙卡                 |        卡莲        |               卡萝尔               |       卢卡       |
|                  可琳                  |        可莉        |                 哲                 |       嘉明       |
|                 坎蒂丝                 |       埃洛伊       |               夏沃蕾               |      夏洛蒂      |
|                  多莉                  |        夜兰        |                奥兹                |       妮可       |
|                  妮露                  |        姬子        |                姬子                |      娜塔莎      |
|                 娜维娅                 |        安东        |                安柏                |       安比       |
|                  宵宫                  |        寒鸦        |             寻梦者(女)             |    寻梦者(男)    |
|           布洛妮娅\_次生银翼           |      布洛妮娅      |              布洛妮娅              |  希儿\_魇夜星渊  |
|                  希儿                  |        希儿        |              希娜狄雅              |      希格雯      |
|                 希露瓦                 |     帕朵菲莉丝     |              幽兰黛尔              |    开拓者(女)    |
|               开拓者(男)               |        彦卿        |          德丽莎\_月下初拥          | 德丽莎\_月下誓约 |
|            德丽莎\_朔夜观星            |       德丽莎       |                恩佐                |       悠真       |
|               戴因斯雷布               |     托帕&账账      |                托马                |      提纳里      |
|                  早柚                  |      时雨绮罗      |             普罗米修斯             |       景元       |
|                   本                   |        朱鸢        |               李素裳               |      杰帕德      |
|                  松雀                  |        林尼        |              枫原万叶              |       柯莱       |
|                 格莉丝                 |       格蕾修       |          格雷修\_绘星之卷          |      桂乃芬      |
|                  桑博                  |      梅比乌斯      |                椒丘                |       比利       |
|                 波提欧                 |        派蒙        |               流浪者               |       流萤       |
|                  渡鸦                  |        温迪        |                 灯                 |       烟绯       |
|                爱莉希雅                |        爱衣        |                猫又                |       玲可       |
|                 珂蕾妲                 |     珊瑚宫心海     |               珐露珊               |      班尼特      |
| 琪亚娜*天穹游侠*薪炎之律者\_终焉之律者 |  琪亚娜\_空之律者  |               琪亚娜               |      琳妮特      |
|                   琴                   |      瑟拉珮姆      |               瑟莉姆               |       瑶瑶       |
|                 瓦尔特                 |        甘雨        |                申鹤                |       白术       |
|                  白露                  |      真理医生      |               知更鸟               |       砂糖       |
|                  砂金                  |      神里绫人      |              神里绫华              |      科拉莉      |
|                   空                   |   符华\_文墨丹心   |           符华\_识之律者           |       符华       |
|                  符玄                  |        米卡        |                米沙                |       素裳       |
|                纯水精灵                |       纳西妲       |               绮良良               |      维尔薇      |
|                  罗刹                  |      罗莎莉亚      |                羽兔                |       翡翠       |
|                  胡桃                  |       艾丝妲       |              艾尔海森              |     艾梅莉埃     |
|                  艾莲                  |      芙卡洛斯      |               芙宁娜               |      芭芭拉      |
|                  芮恩                  |        花火        | 芽衣*断罪影舞*雷之律者\_始源之律者 |       芽衣       |
|                  苍角                  |        苏茜        |               苏莎娜               |     荒泷一斗     |
|                   荧                   |        莎拉        |                莫娜                |      莱依拉      |
|                 莱卡恩                 |      莱欧斯利      |               菲米尼               |      菲谢尔      |
|                 菲谢尔                 |       萍姥姥       |                藿藿                |       虎克       |
|                  行秋                  |        西琳        |               诺艾尔               |       赛诺       |
|                 赫丽娅                 |        辛焱        |              达达利亚              |      迪卢克      |
|                 迪奥娜                 |      迪娜泽黛      |               迪希雅               |     那维莱特     |
|                  重云                  |        钟离        |                 铃                 |       银枝       |
|                  银狼                  |        镜流        |                闲云                |      阮•梅       |
|                  阿兰                  |      阿波尼亚      |              阿蕾奇诺              |      阿贝多      |
|                   雅                   |        雪衣        |                雷泽                |     雷电将军     |
|                  青衣                  |        青雀        |                香菱                |       驭空       |
|                   魈                   |     鹿野院平藏     |                黄泉                |       黑塔       |
|                 黑天鹅                 |       黑希儿       |                                    |                  |

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
- [AI-Hobbyist](https://gsv.acgnai.top)：原神 & 星穹铁道 & 绝区零 & 崩坏3语音合成 GPT-Sovits 在线语音合成

## 许可证

本项目使用 [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) 作为开源许可证。
