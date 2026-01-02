import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './schema'
import migrations from './migrations'

import Memory from './memory'
import ChatMessage from './chatMessage'

const adapter = new SQLiteAdapter({
    schema,
    migrations,
    jsi: true,
    onSetUpError: error => {
    }
})

// Then, make a Watermelon database from it!
const database = new Database({
    adapter,
    modelClasses: [
        Memory,
        ChatMessage
    ],
})

export default database;
export const memoryCollection = database.get<Memory>('memories');
export const chatMessageCollection = database.get<ChatMessage>('chat_messages');