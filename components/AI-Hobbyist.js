import { pluginResources } from '../model/path.js';
import fs from 'fs';
import fetch from 'node-fetch';

const other_params = ["87442de131482429cf60a9c1e812b445", "", "中立", "", "多语种混合", 10, 1, 1, "按标点符号切", 0.3, 10, 0.75, true, 1, true, 1.35, null, "", "中文"];

export async function TextToSpeech(speaker, text) {
    const pluginPath = `${pluginResources}/AI-Hobbyist/AI-Hobbyist.json`;
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
    other_params[1] = space.speaker;
    other_params[3] = text;

    const data = {
        "data": other_params,
        "event_data": null,
        "fn_index": 2,
        "trigger_id": 67,
        "session_hash": Math.random().toString(36).substring(2, 12)
    };

    await fetch('https://gsv.acgnai.top/gradio_api/queue/join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let hash = data.session_hash;

    async function fetchStream() {
        const url = `https://gsv.acgnai.top/gradio_api/queue/data?session_hash=${hash}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'text/event-stream'
            }
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let result = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            result += decoder.decode(value, { stream: true });

            const lines = result.split('\n');
            for (let line of lines) {
                if (line.startsWith('data: ')) {
                    const jsonString = line.substring(6);
                    try {
                        const json = JSON.parse(jsonString);
                        if (json.msg === "process_completed") {
                            return json.output.data[0].url;
                        }
                    } catch (err) {
                        console.error('JSON 解析错误:', err);
                    }
                }
            }

            result = lines.pop();
        }
    }

    const url = await fetchStream();
    return url;
}