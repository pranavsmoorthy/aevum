import Realm from 'realm';

export class Memory extends Realm.Object {
    static schema = {
        name: 'Memory',
        primaryKey: '_id',
        properties: {
            _id: 'string',
            title: 'string',
            description: 'string',
            year: 'int',
            createdAt: 'date',
            synced: { type: 'bool', default: false },
        },
    };
}