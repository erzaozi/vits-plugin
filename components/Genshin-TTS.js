import { pluginResources } from '../model/path.js';
import fs from 'fs';
import fetch from 'node-fetch';
import Config from './Config.js';

const other_params = { "lang": "zh", "appid": "ig8t76x6036h3hpw", "sdp_ratio": 0.2, "noise": 0.6, "noisew": 0.8, "length": 1 };

export async function TextToSpeech(speaker, text, config) {
    const pluginPath = `${pluginResources}/Genshin-TTS/${config.use_interface_sources}.json`;
    const jsonData = fs.readFileSync(pluginPath);
    const data = JSON.parse(jsonData);

    const space = data.space.find(item => item.name === speaker || item.name.includes(speaker));
    if (!space) return null;

    let url;
    try {
        url = await getVoice(space, text);
    } catch (error) {
        logger.error(error)
    }

    return url;
}

async function getVoice(space, text) {

    try {
        const response = await fetch(space.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "token": await Config.getConfig().genshin_tts_token,
                "speaker": space.name,
                "text": text,
                ...other_params
            }),
        });
        const data = await response.json();
        if (data.status !== 1) {
            logger.error(data.message);
            return null;
        }

        return data.audio

    } catch (error) {
        logger.error(error);
        return null;
    }
}