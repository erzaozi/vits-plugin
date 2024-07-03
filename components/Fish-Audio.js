import { pluginResources } from '../model/path.js';
import fs from 'fs';
import fetch from 'node-fetch';
import Config from '../components/Config.js'

export async function TextToSpeech(speaker, text) {
    const pluginPath = `${pluginResources}/Fish-Audio/Fish-Audio.json`;
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
        "type": "tts",
        "channel": "free",
        "stream": true,
        "model": space.speaker,
        "parameters": {
            "text": text
        }
    }

    try {
        const result = await fetch('https://fish-audio.pages.dev/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Config.getConfig().fishaudio_authorization}`
            },
            body: JSON.stringify(data),
        });
        const taskId = result.headers.get('task-id');
        console.log(taskId)
        const voice = await fetch(`https://fish-audio.pages.dev/task/${taskId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Config.getConfig().fishaudio_authorization}`,
            },
        });

        if (voice.status === 200) {
            const result = await voice.json();
            return result.result;
        } else {
            return null;
        }
    } catch (error) {
        logger.error(error)
        return null;
    }
}