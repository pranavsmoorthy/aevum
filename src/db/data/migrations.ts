import { schemaMigrations, createTable, addColumns } from '@nozbe/watermelondb/Schema/migrations'

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
        },
        {
            toVersion: 3,
            steps: [
                addColumns({
                    table: 'memories',
                    columns: [
                        { name: 'title', type: 'string', isOptional: true },
                    ]
                })
            ]
        },
        {
            toVersion: 4,
            steps: [
                addColumns({
                    table: 'memories',
                    columns: [
                        { name: 'date', type: 'number' },
                    ]
                })
            ]
        }
    ],
})