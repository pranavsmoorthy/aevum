import { schemaMigrations, createTable } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
    migrations: [
        {
            toVersion: 2,
            steps: [
                createTable({
                    name: 'chat_messages',
                    columns: [
                        { name: 'sender', type: 'string' },
                        { name: 'text', type: 'string' },
                        { name: 'created_at', type: 'number' },
                    ]
                })
            ]
        }
    ],
})