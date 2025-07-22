import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
const key = process.env.API_KEY;

console.log("API Key:", process.env.API_KEY);

import getGemmaSimulatedResponse from './getResponse.js';

console.log(await getGemmaSimulatedResponse(
    "When did I learn to play guitar?",
    [
        "My favorite color is blue. I love the calm feeling it brings.",
        "I spent last summer learning to play the guitar. It was challenging but rewarding.",
        "My birthday is on October 26th. I usually celebrate it with a small gathering.",
        "I enjoy hiking in national parks, especially those with waterfalls.",
        "I have a pet cat named Luna. She loves to nap in sunbeams.",
        "My favorite food is sushi, particularly salmon nigiri.",
        "I work as a software developer, focusing on web applications.",
        "I recently visited Japan and explored Tokyo and Kyoto. It was an amazing experience.",
        "I am currently reading a fantasy novel about dragons.",
        "I am saving up to buy a new camera for my photography hobby."
    ],
    key
))