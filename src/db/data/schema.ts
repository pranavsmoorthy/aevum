import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
    version: 3,
    tables: [
        tableSchema({
            name: 'memories', 
            columns: [
                { name: 'title', type: 'string', isOptional: true },
                { name: 'description', type: 'string' },
                { name: 'year', type: 'number', isOptional: true },
                { name: 'created_at', type: 'number' },
                { name: 'updated_at', type: 'number' },
            ],
        }),
        tableSchema({
            name: 'chat_messages',
            columns: [
                { name: 'sender', type: 'string' },
                { name: 'text', type: 'string' },
                { name: 'created_at', type: 'number' },
            ],
        }),
    ]
});