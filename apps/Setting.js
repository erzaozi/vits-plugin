import { pluginResources } from '../model/path.js';
import plugin from '../../../lib/plugins/plugin.js'
import Config from '../components/Config.js'
import Init from '../model/init.js'
import fs from 'fs';
import path from 'path';

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
          reg: '^[/#]?vits设置模型.*$',
          /** 执行方法 */
          fnc: 'setModelType',
          /** 主人权限 */
          permission: 'master'
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits模型$',
          /** 执行方法 */
          fnc: 'getModelType'
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits设置源.*$',
          /** 执行方法 */
          fnc: 'setSource',
          /** 主人权限 */
          permission: 'master'
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits源$',
          /** 执行方法 */
          fnc: 'getSource'
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits(开启|关闭)提示$',
          /** 执行方法 */
          fnc: 'setTip',
          /** 主人权限 */
          permission: 'master'
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits(开启|关闭)同传$',
          /** 执行方法 */
          fnc: 'setSync',
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits设置同传模型.*$',
          /** 执行方法 */
          fnc: 'setSyncModelType',
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits设置同传源.*$',
          /** 执行方法 */
          fnc: 'setSyncSource',
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits设置同传发音人.*$',
          /** 执行方法 */
          fnc: 'setSyncSpeaker',
        },
        {
          /** 命令正则匹配 */
          reg: '^[/#]?vits发音人$',
          /** 执行方法 */
          fnc: 'getSpeaker',
        }
      ]
    })
  }

  async setModelType(e) {
    let config = await Config.getConfig();
    let modelTypes = fs.readdirSync(pluginResources)
      .filter(file => fs.statSync(path.join(pluginResources, file)).isDirectory());
    let modelType = e.msg.replace(/^[/#]?vits设置模型/, '').trim();

    if (modelTypes.includes(modelType)) {
      config.tts_config.use_model_type = modelType;
      await Config.setConfig(config);
      e.reply(`模型类型设置成功，当前模型类型为：${modelType}`);
    } else {
      e.reply('模型类型不存在，请发送【#vits模型】查看支持的模型类型');
    }

    return true;
  }

  async getModelType(e) {
    const config = await Config.getConfig();
    const modelType = config.tts_config.use_model_type;
    const modelTypes = fs.readdirSync(pluginResources)
      .filter(file => fs.statSync(path.join(pluginResources, file)).isDirectory());

    const supportedModelTypes = modelTypes.map((type, index) => `${index + 1}.${type}`).join('\n');
    const msg = `当前模型类型为：${modelType}\n支持的模型类型有：\n${supportedModelTypes}`;

    e.reply(msg);
    return true;
  }

  async setSource(e) {
    let config = await Config.getConfig()
    const sources = fs.readdirSync(path.join(pluginResources, config.tts_config.use_model_type))
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
    const message = e.msg.replace(/^[/#]?vits设置源/, '').trim();
    if (sources.includes(message)) {
      config.tts_config.use_interface_sources = message;
      await Config.setConfig(config)
      e.reply(`源设置成功，当前源为：${message}`)
    } else {
      e.reply('源不存在，请发送【#vits源】查看支持的源');
    }
    return true
  }

  async getSource(e) {
    const config = await Config.getConfig();
    const directory = path.join(pluginResources, config.tts_config.use_model_type);
    const sources = fs.readdirSync(directory).filter(file => file.endsWith('.json'));

    const supportedSources = sources.map((source, index) => `${index + 1}.${source.replace('.json', '')}`).join('\n');
    const msg = `当前源为：${config.tts_config.use_interface_sources}\n支持的源有：\n${supportedSources}`;

    e.reply(msg);
    return true;
  }

  async setTip(e) {
    const config = await Config.getConfig();
    const message = e.msg.replace(/^[/#]?vits/, '').trim();

    switch (message) {
      case '开启提示':
        config.tts_config.send_reminder = true;
        await Config.setConfig(config);
        e.reply('提示已开启');
        break;
      case '关闭提示':
        config.tts_config.send_reminder = false;
        await Config.setConfig(config);
        e.reply('提示已关闭');
        break;
      default:
        e.reply('请发送【#vits开启提示】或【#vits关闭提示】');
    }

    return true;
  }

  async setSync(e) {
    if (!e.group_id) {
      e.reply('请在群聊中开关此功能')
      return true
    }
    const config = await Config.getConfig();
    const message = e.msg.replace(/^[/#]?vits/, '').trim();
    const userConfig = config.tts_sync_config.find(item => item.user_id === e.user_id);

    if (message === '开启同传') {
      if (userConfig) {
        if (!userConfig.enable_group.includes(e.group_id)) {
          userConfig.enable_group.push(e.group_id);
          await Config.setConfig(config);
          e.reply(`当前群聊同传已开启，使用发音人：${userConfig.use_speeaker}`);
        } else {
          e.reply(`当前群聊同传已在使用，发音人：${userConfig.use_speeaker}`);
        }
      } else {
        const newUserConfig = {
          user_id: e.user_id,
          enable_group: [e.group_id],
          use_model_type: 'Bert-VITS2',
          use_interface_sources: 'Modelscope',
          use_speeaker: '塔菲',
        };
        config.tts_sync_config.push(newUserConfig);
        await Config.setConfig(config);
        e.reply('当前群聊同传已开启，使用发音人：塔菲');
      }
    } else if (message === '关闭同传') {
      if (userConfig && userConfig.enable_group.includes(e.group_id)) {
        const index = userConfig.enable_group.indexOf(e.group_id);
        userConfig.enable_group.splice(index, 1);
        await Config.setConfig(config);
      }
      e.reply('当前群聊同传已关闭');
    }

    return true;
  }

  async setSyncModelType(e) {
    const config = await Config.getConfig();
    const modelTypes = fs.readdirSync(pluginResources)
      .filter(file => fs.statSync(path.join(pluginResources, file)).isDirectory());
    const modelType = e.msg.replace(/^[/#]?vits设置同传模型/, '').trim();

    if (modelTypes.includes(modelType)) {
      config.tts_sync_config.find(user => user.user_id === e.user_id).use_model_type = modelType;
      await Config.setConfig(config);
      e.reply(`同传模型类型设置成功，当前模型类型为：${modelType}`);
    } else {
      e.reply('模型类型不存在，请发送【#vits模型】查看支持的模型类型');
    }

    return true;
  }

  async setSyncSource(e) {
    const config = await Config.getConfig();
    const userSyncConfig = config.tts_sync_config.find(item => item.user_id === e.user_id);
    const sources = fs.readdirSync(path.join(pluginResources, config.tts_config.use_model_type))
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
    const message = e.msg.replace(/^[/#]?vits设置同传源/, '').trim();

    if (sources.includes(message)) {
      userSyncConfig.use_interface_sources = message;
      await Config.setConfig(config);
      e.reply(`同传源设置成功，当前源为：${message}`);
    } else {
      e.reply('源不存在，请发送【#vits源】查看支持的源');
    }

    return true;
  }

  async setSyncSpeaker(e) {
    const config = await Config.getConfig();
    const userSyncConfig = config.tts_sync_config.find(item => item.user_id === e.user_id);
    const speakersDataPath = path.join(pluginResources, userSyncConfig.use_model_type, userSyncConfig.use_interface_sources + '.json');
    const speakersData = JSON.parse(fs.readFileSync(speakersDataPath));
    const speakerName = e.msg.replace(/^[/#]?vits设置同传发音人/, '').trim();
    if (!speakerName) {
      e.reply('发音人不存在，请发送【#vits发音人】查看支持的发音人')
      return true
    }
    const speakerEntry = speakersData.space.find(sp => sp.name === speakerName || sp.name.includes(speakerName));

    if (speakerEntry) {
      userSyncConfig.use_speaker = speakerName;
      await Config.setConfig(config);
      e.reply(`同传发音人设置成功，当前发音人为：${speakerName}`);
    } else {
      e.reply('发音人不存在，请发送【#vits发音人】查看支持的发音人');
    }

    return true;
  }

  async getSpeaker(e) {
    const config = await Config.getConfig();
    const userSyncConfig = config.tts_sync_config.find(item => item.user_id === e.user_id);

    const dataPath = path.join(pluginResources, userSyncConfig.use_model_type, userSyncConfig.use_interface_sources + '.json');
    const data = JSON.parse(fs.readFileSync(dataPath));
    const speakersList = data.space.map((sp, index) => `${index + 1}.${sp.name}`).join('\n');

    const msg = `当前同传发音人为：${userSyncConfig.use_speaker}\n` +
      `当前使用的模型类型为：${userSyncConfig.use_model_type}\n` +
      `当前使用的源为：${userSyncConfig.use_interface_sources}\n` +
      `支持的发音人有：\n${speakersList}`;

    e.reply(msg);
    return true;
  }
}
