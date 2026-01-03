import { memoryCollection, chatMessageCollection } from './data'
import Memory from './data/memory'
import ChatMessage from './data/chatMessage'

export async function createMemory(description: string, date: number, title?: string) {
    return memoryCollection.database.write(async () => {
        const year = new Date(date).getFullYear();
        return memoryCollection.create(memory => {
            if (title) memory.title = title
            memory.description = description
            memory.year = year
            memory.date = date
        })
    })
}

export async function getAllMemories(): Promise<Memory[]> {
    return memoryCollection.query().fetch()
}

export async function getMemoryById(id: string): Promise<Memory | null> {
    const memory = await memoryCollection.find(id).catch(() => null)
    return memory
}

export async function updateMemory(id: string, updates: { title?: string, description?: string, year?: number | null, date?: number }) {
    return memoryCollection.database.write(async () => {
        const memory = await memoryCollection.find(id)
        await memory.update(m => {
            if (updates.title !== undefined) m.title = updates.title
            if (updates.description !== undefined) m.description = updates.description
            if (updates.year !== undefined) m.year = updates.year
            if (updates.date !== undefined) m.date = updates.date
        })
        return memory
    })
}

export async function deleteMemory(id: string) {
    return memoryCollection.database.write(async () => {
        const memory = await memoryCollection.find(id)
        await memory.markAsDeleted() // syncable
        await memory.destroyPermanently() // permanent
    })
}

export async function deleteAllMemories() {
    return memoryCollection.database.write(async () => {
        const memories = await memoryCollection.query().fetch()
        for (const memory of memories) {
            await memory.markAsDeleted()
            await memory.destroyPermanently()
        }
    })
}

export async function createChatMessage(sender: 'user' | 'ai', text: string) {
    return chatMessageCollection.database.write(async () => {
        return chatMessageCollection.create(message => {
            message.sender = sender
            message.text = text
        })
    })
}

export async function getAllChatMessages(): Promise<ChatMessage[]> {
    return chatMessageCollection.query().fetch()
}

export async function deleteAllChatMessages() {
    return chatMessageCollection.database.write(async () => {
        const chatMessages = await chatMessageCollection.query().fetch()
        for (const chatMessage of chatMessages) {
            await chatMessage.markAsDeleted()
            await chatMessage.destroyPermanently()
        }
    })
}

