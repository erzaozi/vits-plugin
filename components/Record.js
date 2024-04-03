import fetch from 'node-fetch';

export async function getRecord(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('网络响应不是 ok 状态');
        
        const buffer = await response.buffer();
        return `data:${response.headers.get('content-type')};base64,${buffer.toString('base64')}`;
    } catch (error) {
        console.error('转换音频 URL 到 Base64 发生错误：', error);
        throw error;
    }
}