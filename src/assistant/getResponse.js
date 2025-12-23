import { GoogleGenAI } from "@google/genai";

function extractKeywords(prompt) {
    let arr = prompt.toLowerCase()
        .split(/\s+/)
        .filter(word => 
            word.length > 2 && 
            !['is', 'what', 'my', 'your', 'a', 'an', 'the', 'how', 'when', 'where', 'why', 'who']
        .includes(word));

    let keywords = []
    arr.forEach(word => {
        keywords.push(word.replace(/[^a-zA-Z0-9]/g, '')); // Remove non-alphanumeric characters
    })
    return keywords;
}

function findRelevantMemories(userPrompt, memory) {
    const keywords = extractKeywords(userPrompt);
    const relevantMemories = new Set();

    memory.forEach(mem => {
        const lowerCaseMem = mem.toLowerCase();
        for (const keyword of keywords) {
            if (lowerCaseMem.includes(keyword)) {
                relevantMemories.add(mem);
                break;
            }
        }
    });
    return Array.from(relevantMemories);
}

export default async function getGemmaSimulatedResponse(userPrompt, memories, apiKey) {
    let prompt = "";
    let relevantMemories = findRelevantMemories(userPrompt, memories);

    if (relevantMemories.length > 0) {
        prompt = `The user asked: "${userPrompt}". Based on the following memories, provide a concise and helpful response. If the memories don't directly answer the question, state that you don't have enough information in your memory regarding that specific detail.
                Memories:
                ${relevantMemories.map(m => `- ${m}`).join('\n')}
                Response:`;
    } else {
        prompt = `The user asked: "${userPrompt}". I do not have specific memories related to this topic. Please respond by stating that you don't have information on this topic in your memory.
                Response:`;
    }

    const ai = new GoogleGenAI({ apiKey: apiKey })
    
    try {
        const response = await ai.models.generateContent({
            model: "gemma-3-27b-it",
            contents: prompt,
        });

        if (response.candidates && response.candidates != 0) {
            console.log(JSON.stringify(response.candidates));
            return response.candidates[0].content.parts[0].text.trim();
        } else {
            console.error("Unexpected API response structure:", result);
            return "Sorry, I couldn't generate a response. The AI model returned an unexpected result.";
        }
    } catch (error) {
        console.error("Error calling Gemini API for Gemma simulation:", error);
        return "I'm sorry, I encountered an error trying to process your request. Please try again.";
    }
}