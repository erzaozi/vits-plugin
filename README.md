![vits-plugin](https://socialify.git.ci/erzaozi/vits-plugin/image?description=1&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)

<img decoding="async" align=right src="resources/readme/girl.png" width="35%">

# VITS-PLUGIN 🍇

- 一个适用于 [Yunzai 系列机器人框架](https://github.com/yhArcadia/Yunzai-Bot-plugins-index) 的的 AI 语音合成插件，让你能够在机器人中使用 AI 语音合成功能

- 使用著名AI社区 [huggingface](https://huggingface.co/) 和国内知名AI社区 [modelscope](https://www.modelscope.cn/) 的接口，支持BERT-VITS2、GPT-SoVITS、Genshin-TTS等模型，对自身硬件没有要求，降低了使用门槛，让更多人体验AI语音合成的乐趣。

- **使用中遇到问题请加QQ群咨询：[707331865](https://qm.qq.com/q/TXTIS9KhO2)**

> [!TIP]
> 在朋友们的呼声下 [CikeyQi](https://github.com/CikeyQi) 决定开发这个插件，为了降低使用门槛，该插件搜罗当前互联网中可以直接免费使用的接口，并将其打包进插件中，让用户能够直接在机器人中使用这些接口，这个插件超棒的噢。

## 安装插件

#### 1. 克隆仓库

```
git clone https://github.com/erzaozi/vits-plugin.git ./plugins/vits-plugin
```

> [!NOTE]
> 如果你的网络环境较差，无法连接到Github，可以使用 [GitHub Proxy](https://mirror.ghproxy.com/) 提供的文件代理加速下载服务
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

- <details> <summary>获取 Genshin TTS Token</summary>
    
    在 [这里](https://tts.ai-hobbyist.org/#/apikey) 获取你的专属密钥

  </details>

## 功能列表

请使用 `#vits帮助` 获取完整帮助

- [x] 同声传译 自动将你的文本消息合成AI语音
- [x] 语音合成 单独合成某个角色的语音
- [x] 指令换源 可使用指令或锅巴更换模型源

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

| 模型名称 | 模型名称 | 模型名称 | 模型名称 |
| :---: | :---: | :---: | :---: |
| [AI陈泽（中日英）](https://www.modelscope.cn/studios/xzjosh/Ze-Bert-VITS2-2.3) | [AI星瞳（坏女人）（中日英）](https://www.modelscope.cn/studios/xzjosh/badXT-Bert-VITS2-2.3) | [AI梅西2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Messi-Bert-VITS2-2.3) | [AI珈乐2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Carol-Bert-VITS2-2.3) |
| [AI乃琳2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Queen-Bert-VITS2-2.3) | [AI七海2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Nana7mi-Bert-VITS2-2.3) | [AI塔菲2.0重制版（中日英）](https://www.modelscope.cn/studios/xzjosh/Taffy-Bert-VITS2-2.3) | [AI东雪莲2.0重制版（中日英）](https://www.modelscope.cn/studios/xzjosh/Azuma-Bert-VITS2-2.3) |
| [AI奶绿2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/LAPLACE-Bert-VITS2-2.3) | [AI尼奈2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/nine-Bert-VITS2-2.3) | [AI科比2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Kobe-Bert-VITS2-2.3) | [AI嘉然2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Diana-Bert-VITS2-2.3) |
| [AI丁真2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/DZ-Bert-VITS2-2.3) | [AI丁真2.0（备用1）](https://www.modelscope.cn/studios/xzjosh/dingzhen-Bert-VITS2-2.3) | [AI丁真2.0（备用2）](https://www.modelscope.cn/studios/xzjosh/DZhen-Bert-VITS2-2.3) | [AI炫神2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Xuan-Bert-VITS2-2.3) |
| [AI电棍2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/otto-Bert-VITS2-2.3) | [AI阿梓2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Azusa-Bert-VITS2-2.3) | [AI东雪莲2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Azuma-Bert-VITS2.0.2) | [AI塔菲2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/Taffy-Bert-VITS2.0.2) |
| [AI星瞳2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/2568-Bert-VITS2) | [AI孙笑川2.0（中日英）](https://www.modelscope.cn/studios/xzjosh/SXC-Bert-VITS2) | [AI塔菲](https://www.modelscope.cn/studios/xzjosh/Taffy-Bert-VITS2) | [AI小菲](https://www.modelscope.cn/studios/xzjosh/LittleTaffy-Bert-VITS2) |
| [AI东雪莲](https://www.modelscope.cn/studios/xzjosh/Azuma-Bert-VITS2) | [AI奶绿](https://www.modelscope.cn/studios/xzjosh/LAPLACE-Bert-VITS2) | [AI尼奈](https://www.modelscope.cn/studios/xzjosh/nine1-Bert-VITS2) | [AI珈乐](https://www.modelscope.cn/studios/xzjosh/Carol-Bert-VITS2) |
| [AI电棍](https://www.modelscope.cn/studios/xzjosh/otto-Bert-VITS2) | [AI七海](https://www.modelscope.cn/studios/xzjosh/Nana7mi-Bert-VITS2) | [AI阿梓](https://www.modelscope.cn/studios/xzjosh/Azusa-Bert-VITS2) | [AI星瞳](https://www.modelscope.cn/studios/xzjosh/XingTong-Bert-VITS2) |
| [AI向晚](https://www.modelscope.cn/studios/xzjosh/Ava-Bert-VITS2) | [AI嘉然](https://www.modelscope.cn/studios/xzjosh/Diana-Bert-VITS2) | [AI剑魔](https://www.modelscope.cn/studios/xzjosh/Aatrox-Bert-VITS2) | [AI乃琳](https://www.modelscope.cn/studios/xzjosh/Eileen-Bert-VITS2) |
| [AI贝拉](https://www.modelscope.cn/studios/xzjosh/Bella-Bert-VITS2) | [AI扇宝](https://www.modelscope.cn/studios/xzjosh/ShanBao-Bert-VITS2) | [AI恬豆](https://www.modelscope.cn/studios/xzjosh/Bekki-Bert-VITS2) | [AI黑桃影](https://www.modelscope.cn/studios/xzjosh/Echo-Bert-VITS2) |
| [AI卖卖](https://www.modelscope.cn/studios/xzjosh/maimai-Bert-VITS2) | [AI鹿鸣](https://www.modelscope.cn/studios/xzjosh/Lumi-Bert-VITS2) | [AI文静](https://www.modelscope.cn/studios/xzjosh/Wenjing-Bert-VITS2) |  |

</details>

#### Huggingface 平台

<details><summary>点击展开</summary>

| 模型名称 | 模型名称 | 模型名称 | 模型名称 |
| :---: | :---: | :---: | :---: |
| [AI星瞳（坏女人）（中日英）](https://huggingface.co/spaces/XzJosh/badXT-Bert-VITS2-2.3) | [AI梅西2.0（中日英）](https://huggingface.co/spaces/XzJosh/Messi-Bert-VITS2-2.3) | [AI珈乐2.0（中日英）](https://huggingface.co/spaces/XzJosh/Carol-Bert-VITS2-2.3) | [AI乃琳2.0（中日英）](https://huggingface.co/spaces/XzJosh/Queen-Bert-VITS2-2.3) |
| [AI七海2.0（中日英）](https://huggingface.co/spaces/XzJosh/Nana7mi-Bert-VITS2-2.3) | [AI塔菲2.0重制版（中日英）](https://huggingface.co/spaces/XzJosh/Taffy-Bert-VITS2-2.3) | [AI东雪莲2.0重制版（中日英）](https://huggingface.co/spaces/XzJosh/Azuma-Bert-VITS2-2.3) | [AI奶绿2.0（中日英）](https://huggingface.co/spaces/XzJosh/LAPLACE-Bert-VITS2-2.3) |
| [AI尼奈2.0（中日英）](https://huggingface.co/spaces/XzJosh/nine-Bert-VITS2-2.3) | [AI科比2.0（中日英）](https://huggingface.co/spaces/XzJosh/Kobe-Bert-VITS2-2.3) | [AI嘉然2.0（中日英）](https://huggingface.co/spaces/XzJosh/Diana-Bert-VITS2-2.3) | [AI丁真2.0（中日英）](https://huggingface.co/spaces/XzJosh/DZ-Bert-VITS2-2.3) |
| [AI炫神2.0（中日英）](https://huggingface.co/spaces/XzJosh/Xuan-Bert-VITS2-2.3) | [AI电棍2.0（中日英）](https://huggingface.co/spaces/XzJosh/otto-Bert-VITS2-2.3) | [AI阿梓2.0（中日英）](https://huggingface.co/spaces/XzJosh/Azusa-Bert-VITS2-2.3) | [AI东雪莲2.0（中日英）](https://huggingface.co/spaces/XzJosh/Azuma-Bert-VITS2.0.2) |
| [AI塔菲2.0（中日英）](https://huggingface.co/spaces/XzJosh/Taffy-Bert-VITS2.0.2) | [AI星瞳2.0（中日英）](https://huggingface.co/spaces/XzJosh/2568-Bert-VITS2) | [AI孙笑川2.0（中日英）](https://huggingface.co/spaces/XzJosh/Sun-Bert-VITS2) | [AI塔菲](https://huggingface.co/spaces/XzJosh/Taffy-Bert-VITS2) |
| [AI小菲](https://huggingface.co/spaces/XzJosh/LittleTaffy-Bert-VITS2) | [AI东雪莲](https://huggingface.co/spaces/XzJosh/Azuma-Bert-VITS2) | [AI奶绿](https://huggingface.co/spaces/XzJosh/LAPLACE-Bert-VITS2) | [AI尼奈](https://huggingface.co/spaces/XzJosh/nine1-Bert-VITS2) |
| [AI珈乐](https://huggingface.co/spaces/XzJosh/Carol-Bert-VITS2) | [AI电棍](https://huggingface.co/spaces/XzJosh/otto-Bert-VITS2) | [AI七海](https://huggingface.co/spaces/XzJosh/Nana7mi-Bert-VITS2) | [AI阿梓](https://huggingface.co/spaces/XzJosh/Azusa-Bert-VITS2) |
| [AI星瞳](https://huggingface.co/spaces/XzJosh/XingTong-Bert-VITS2) | [AI向晚](https://huggingface.co/spaces/XzJosh/Ava-Bert-VITS2) | [AI嘉然](https://huggingface.co/spaces/XzJosh/Diana-Bert-VITS2) | [AI剑魔](https://huggingface.co/spaces/XzJosh/Aatrox-Bert-VITS2) |
| [AI乃琳](https://huggingface.co/spaces/XzJosh/Eileen-Bert-VITS2) | [AI贝拉](https://huggingface.co/spaces/XzJosh/Bella-Bert-VITS2) | [AI扇宝](https://huggingface.co/spaces/XzJosh/ShanBao-Bert-VITS2) | [AI恬豆](https://huggingface.co/spaces/XzJosh/Bekki-Bert-VITS2) |
| [AI黑桃影](https://huggingface.co/spaces/XzJosh/Echo-Bert-VITS2) | [AI卖卖](https://huggingface.co/spaces/XzJosh/maimai-Bert-VITS2) | [AI鹿鸣](https://huggingface.co/spaces/XzJosh/Lumi-Bert-VITS2) | [AI文静](https://huggingface.co/spaces/XzJosh/Wenjing-Bert-VITS2) |

</details>

### 🍊GPT-SoVITS

#### Modelscope 平台

<details><summary>点击展开</summary>

| 模型名称 | 模型名称 | 模型名称 | 模型名称 |
| :---: | :---: | :---: | :---: |
| [AI张顺飞](https://www.modelscope.cn/studios/xzjosh/Shun-GPT-SoVITS) | [AI蔡徐坤](https://www.modelscope.cn/studios/xzjosh/Kun-GPT-SoVITS) | [AI米诺](https://www.modelscope.cn/studios/xzjosh/Mino-GPT-SoVITS) | [AI陈泽](https://www.modelscope.cn/studios/xzjosh/Ze-GPT-SoVITS) |
| [AI电棍](https://www.modelscope.cn/studios/xzjosh/otto-GPT-SoVITS) | [AI炫神](https://www.modelscope.cn/studios/xzjosh/Xuan-GPT-SoVITS) | [AI山泥若](https://www.modelscope.cn/studios/xzjosh/Ruo-GPT-SoVITS) | [AI丁真](https://www.modelscope.cn/studios/xzjosh/dingzhen-GPT-SoVITS) |
| [AI孙笑川](https://www.modelscope.cn/studios/xzjosh/sun-GPT-SoVITS) | [AI东雪莲](https://www.modelscope.cn/studios/xzjosh/Azuma-GPT-SoVITS) | [AI塔菲](https://www.modelscope.cn/studios/xzjosh/Taffy-GPT-SoVITS) | [AI奶绿](https://www.modelscope.cn/studios/xzjosh/LAPLACE-GPT-SoVITS) |
| [AI阿梓](https://www.modelscope.cn/studios/xzjosh/Azusa-GPT-SoVITS) | [AI七海](https://www.modelscope.cn/studios/xzjosh/Nana7mi-GPT-SoVITS) | [AI星瞳](https://www.modelscope.cn/studios/xzjosh/XingTong-GPT-SoVITS) | [AI星瞳（坏女人）](https://www.modelscope.cn/studios/xzjosh/badXT-GPT-SoVITS) |
| [AI扇宝](https://www.modelscope.cn/studios/xzjosh/SB-GPT-SoVITS) | [AI扇宝（卖卖）](https://www.modelscope.cn/studios/xzjosh/maimai-GPT-SoVITS) | [AI尼奈](https://www.modelscope.cn/studios/xzjosh/nine-GPT-SoVITS) | [AI恬豆](https://www.modelscope.cn/studios/xzjosh/Bekki-GPT-SoVITS) |
| [AI向晚](https://www.modelscope.cn/studios/xzjosh/Ava-GPT-SoVITS) | [AI贝拉](https://www.modelscope.cn/studios/xzjosh/Bella-GPT-SoVITS) | [AI珈乐](https://www.modelscope.cn/studios/xzjosh/Carol-GPT-SoVITS) | [AI嘉然](https://www.modelscope.cn/studios/xzjosh/Diana-GPT-SoVITS) |
| [AI乃琳](https://www.modelscope.cn/studios/xzjosh/Eileen-GPT-SoVITS) |  |  |  |

</details>

#### Huggingface 平台

<details><summary>点击展开</summary>

| 模型名称 | 模型名称 | 模型名称 | 模型名称 |
| :---: | :---: | :---: | :---: |
| [AI电棍](https://huggingface.co/spaces/XzJosh/otto-GPT-SoVITS) | [AI炫神](https://huggingface.co/spaces/XzJosh/Xuan-GPT-SoVITS) | [AI山泥若](https://huggingface.co/spaces/XzJosh/Ruo-GPT-SoVITS) | [AI丁真](https://huggingface.co/spaces/XzJosh/dingzhen-GPT-SoVITS) |
| [AI孙笑川](https://huggingface.co/spaces/XzJosh/sun-GPT-SoVITS) | [AI东雪莲](https://huggingface.co/spaces/XzJosh/Azuma-GPT-SoVITS) | [AI塔菲](https://huggingface.co/spaces/XzJosh/Taffy-GPT-SoVITS) | [AI奶绿](https://huggingface.co/spaces/XzJosh/LAPLACE-GPT-SoVITS) |
| [AI阿梓](https://huggingface.co/spaces/XzJosh/Azusa-GPT-SoVITS) | [AI七海](https://huggingface.co/spaces/XzJosh/Nana7mi-GPT-SoVITS) | [AI星瞳（坏女人）](https://huggingface.co/spaces/XzJosh/badXT-GPT-SoVITS) | [AI坏女人](https://huggingface.co/spaces/XzJosh/badXT-GPT-SoVITS) |
| [AI扇宝](https://huggingface.co/spaces/XzJosh/SB-GPT-SoVITS) | [AI扇宝（卖卖）](https://huggingface.co/spaces/XzJosh/maimai-GPT-SoVITS) | [AI尼奈](https://huggingface.co/spaces/XzJosh/nine-GPT-SoVITS) | [AI恬豆](https://huggingface.co/spaces/XzJosh/Bekki-GPT-SoVITS) |
| [AI向晚](https://huggingface.co/spaces/XzJosh/Ava-GPT-SoVITS) | [AI贝拉](https://huggingface.co/spaces/XzJosh/Bella-GPT-SoVITS) | [AI珈乐](https://huggingface.co/spaces/XzJosh/Carol-GPT-SoVITS) | [AI嘉然](https://huggingface.co/spaces/XzJosh/Diana-GPT-SoVITS) |
| [AI乃琳](https://huggingface.co/spaces/XzJosh/Eileen-GPT-SoVITS) |  |  |  |

</details>

### 🥕Genshin-TTS

#### Modelscope 平台

<details><summary>点击展开</summary>

| 模型名称 | 模型名称 | 模型名称 | 模型名称 |
| :---: | :---: | :---: | :---: |
| anzai         | 「信使」     | 「公子」     | 「博士」      |
| 「大肉丸」    | 「女士」    | 「散兵」     | 「白老先生」   |
| 七七          | 三月七      | 上杉        | 丹吉尔        |
| 丹恒          | 丹枢        | 丽莎        | 久利须        |
| 久岐忍        | 九条裟罗    | 九条镰治    | 云堇          |
| 五郎          | 伊利亚斯    | 伊迪娅      | 优菈          |
| 伦纳德        | 佐西摩斯    | 佩拉        | 停云          |
| 元太          | 克列门特    | 克拉拉      | 克罗索        |
| 八重神子      | 公输师傅    | 凝光        | 凯亚          |
| 凯瑟琳        | 刃          | 刻晴        | 北斗          |
| 半夏          | 博易        | 博来        | 卡波特        |
| 卡维          | 卡芙卡      | 卢卡        | 可可利亚      |
| 可莉          | 史瓦罗      | 吴船长      | 哲平          |
| 嘉玛          | 嘉良        | 回声海螺    | 坎蒂丝        |
| 埃勒曼        | 埃尔欣根    | 埃德        | 埃泽          |
| 埃洛伊        | 埃舍尔      | 塔杰·拉德卡尼 | 塞塔蕾       |
| 塞琉斯        | 夏洛蒂      | 多莉        | 夜兰          |
| 大慈树王      | 大毫        | 天叔        | 天目十五      |
| 奥兹          | 奥列格      | 女士        | 妮露          |
| 姬子          | 娜塔莎      | 娜维娅      | 安柏          |
| 安西          | 宛烟        | 宵宫        | 岩明          |
| 巴达维        | 布洛妮娅    | 希儿        | 希露瓦        |
| 帕姆          | 帕斯卡      | 常九爷      | 康纳          |
| 开拓者(女)    | 开拓者(男)  | 式大将      | 彦卿          |
| 影            | 德沃沙克    | 恕筠        | 恶龙          |
| 悦            | 慧心        | 戴因斯雷布  | 托克          |
| 托马          | 拉赫曼      | 拉齐        | 掇星攫辰天君   |
| 提纳里        | 斯坦利      | 斯科特      | 旁白          |
| 早柚          | 昆钧        | 明曦        | 景元          |
| 晴霓          | 杜拉夫      | 杰帕德      | 松浦          |
| 林尼          | 枫原万叶    | 柊千里      | 查尔斯        |
| 柯莱          | 桑博        | 欧菲妮      | 毗伽尔        |
| 沙扎曼        | 派蒙        | 流浪者      | 浣溪          |
| 浮游水蕈兽·元素生命 | 海妮耶 | 海芭夏      | 深渊使徒      |
| 深渊法师      | 温迪        | 烟绯        | 爱德琳        |
| 爱贝尔        | 玛乔丽      | 玛塞勒      | 玛格丽特      |
| 玲可          | 珊瑚        | 珊瑚宫心海  | 珐露珊        |
| 班尼特        | 琳妮特      | 琴          | 瑶瑶          |
| 瓦尔特        | 甘雨        | 田铁嘴      | 申鹤          |
| 留云借风真君  | 白术        | 白露        | 百闻          |
| 知易          | 石头        | 砂糖        | 神里绫人      |
| 神里绫华      | 空          | 符玄        | 笼钓瓶一心    |
| 米卡          | 素裳        | 纯水精灵？  | 纳比尔        |
| 纳西妲        | 绮良良      | 绿芙蓉      | 罗刹          |
| 罗莎莉亚      | 羽生田千鹤  | 老孟        | 胡桃          |
| 舒伯特        | 艾丝妲      | 艾伯特      | 艾尔海森      |
| 艾文          | 艾莉丝      | 芙宁娜      | 芭芭拉        |
| 荒泷一斗      | 荧          | 莎拉        | 莫塞伊思      |
| 莫娜          | 莱依拉      | 莺儿        | 菲米尼        |
| 菲谢尔        | 萍姥姥      | 萨赫哈蒂    | 萨齐因        |
| 蒂玛乌斯      | 虎克        | 螺丝咕姆    | 行秋          |
| 西拉杰        | 言笑        | 诺艾尔      | 费斯曼        |
| 赛诺          | 辛焱        | 达达利亚    | 迈勒斯        |
| 迈蒙          | 迪卢克      | 迪奥娜      | 迪娜泽黛      |
| 迪希雅        | 那维莱特    | 重云        | 金人会长      |
| 钟离          | 银狼        | 镜流        | 长生          |
| 阿佩普        | 阿兰        | 阿圆        | 阿娜耶        |
| 阿守          | 阿尔卡米    | 阿巴图伊    | 阿扎尔        |
| 阿拉夫        | 阿晃        | 阿洛瓦      | 阿祇          |
| 阿贝多        | 陆行岩本真蕈·元素生命 | 雷泽    | 雷电将军    |
| 霄翰          | 霍夫曼      | 青镞        | 青雀          |
| 香菱          | 驭空        | 魈          | 鹿野奈奈      |
| 鹿野院平藏    | 黑塔        | 龙二        | 多人对话      |

</details>

## 常见问题
1. 合成失败，请检查角色名与文本内容
   + 检查当前使用的源和模型是否存在这个角色，角色名是否正确

## 支持与贡献

如果你喜欢这个项目，请不妨点个 Star🌟，这是对开发者最大的动力， 当然，你可以对我 [爱发电](https://afdian.net/a/sumoqi) 赞助，呜咪~❤️

有意见或者建议也欢迎提交 [Issues](https://github.com/erzaozi/vits-plugin/issues) 和 [Pull requests](https://github.com/erzaozi/vits-plugin/pulls)。

## 鸣谢
* [Xz乔希](https://space.bilibili.com/5859321)：在线语音合成模型作者\
* [Bert-VITS2](https://github.com/fishaudio/Bert-VITS2)：一个非常好的语音合成项目\
* [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)：一个非常好的语音合成项目\
* [Genshin-TTS](https://www.modelscope.cn/studios/erythrocyte/Bert-VITS2_Genshin_TTS)：一个非常好的语音合成项目

## 许可证
本项目使用 [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) 作为开源许可证。