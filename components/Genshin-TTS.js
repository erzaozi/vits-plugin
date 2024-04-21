import { pluginResources } from '../model/path.js';
import fs from 'fs';
import fetch from 'node-fetch';
import Config from './Config.js';

const other_params = [0.5, 0.6, 0.9, 1, "ZH", false, 1, 0.2, null, "Happy", "", 0.7];

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
    const data = {
        "data": [text, space.speaker, ...other_params],
        "fn_index": 0,
        "session_hash": Math.random().toString(36).substring(2, 13)
    };

    const result = await fetchPost(space.url, data);
    if (result && result.data[0] == 'Success') {
        return space.file + result.data[1].name;
    }
    return null;
}

async function fetchPost(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        logger.error(error)
        return null;
    }
}