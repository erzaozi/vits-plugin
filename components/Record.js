import fetch from 'node-fetch';

export async function getRecord(url) {
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    console.error('Error fetching URL:', error);
    throw error;
  }

  if (!response.ok) throw new Error('Response not ok');

  let arrayBuffer;
  try {
    arrayBuffer = await response.arrayBuffer();
  } catch (error) {
    console.error('Error converting response to arrayBuffer:', error);
    throw error;
  }

  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString('base64');

  return base64;
}