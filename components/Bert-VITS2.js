import { pluginResources } from '../model/path.js';
import fs from 'fs';
import fetch from 'node-fetch';
import ws from 'ws';

const other_params = [0.6, 0.5, 0.9, 1, "ZH", null, "Happy", "Text prompt", "", 0.7];

export async function TextToSpeech(speaker, text, config) {
    const pluginPath = `${pluginResources}/${config.use_model_type}/${config.use_interface_sources}.json`;
    const jsonData = fs.readFileSync(pluginPath);
    const data = JSON.parse(jsonData);

    const space = data.space.find(item => item.name === speaker || item.name.includes(speaker));
    if (!space) return null;

    let url;
    try {
        url = await getVoice(space, text, config.use_interface_sources);
    } catch (error) {
        console.error(error);
    }

    return url;
}

async function getVoice(space, text, source) {
    let file_url;
    if (source == 'Modelscope') {
        file_url = await getModelscopeVoice(space, text);
    } else if (source == 'HuggingFace') {
        file_url = await getHuggingfaceVoice(space, text);
    }
    return file_url ? `${space.file}${file_url}` : null;
}

async function getModelscopeVoice(space, text) {
    const data = {
        "data": [text, space.speaker, ...other_params],
        "fn_index": 0,
        "session_hash": Math.random().toString(36).substring(2, 13)
    };

    const result = await fetchPost(space.url, data);
    if (result && result.data[0] == 'Success') {
        return result.data[1].name;
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
        console.error(error);
        return null;
    }
}

function getHuggingfaceVoice(space, text) {
    return new Promise((resolve, reject) => {
        let hash = Math.random().toString(36).substring(2, 12);
        let ws_client = new ws(space.url);

        ws_client.on("open", () => {
        });

        ws_client.on("message", event => {
            event = JSON.parse(event);
            console.log(event.msg);
            switch (event.msg) {
                case "send_hash":
                    ws_client.send(JSON.stringify({
                        session_hash: hash,
                        fn_index: 0,
                    }));
                    break;
                case "estimation":
                    {
                        break;
                    };
                case "send_data":
                    ws_client.send(JSON.stringify({
                        "data": [text, space.speaker, ...other_params],
                        "fn_index": 0,
                        "session_hash": hash,
                    }));
                    break;
                case "process_starts":
                    {
                        break;
                    }
                case "process_completed":
                    ws_client.close();
                    if (event.output.data[0] == 'Success') {
                        let file_url = event.output.data[1].name;
                        resolve(file_url);
                    } else {
                        reject(event.output.data);
                    }
                    break;
                case "process_failed":
                    ws_client.close();
                    reject(event.output.data);
                    break;
            }
        });

        ws_client.on("error", error => {
            ws_client.close();
            reject(error);
        });

        ws_client.on("close", () => {

        });
    });
}
