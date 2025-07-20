import { memoryCollection } from './data'
import Memory from './data/memory'

export async function createMemory(description: string, year?: number | null) {
    return memoryCollection.database.write(async () => {
        return memoryCollection.create(memory => {
            memory.description = description
            memory.year = year ?? null
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

export async function updateMemory(id: string, updates: { description?: string, year?: number | null }) {
    return memoryCollection.database.write(async () => {
        const memory = await memoryCollection.find(id)
        await memory.update(m => {
            if (updates.description !== undefined) m.description = updates.description
            if (updates.year !== undefined) m.year = updates.year
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
