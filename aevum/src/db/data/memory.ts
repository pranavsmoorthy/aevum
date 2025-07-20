import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'

export default class Memory extends Model {
    static table = 'memories';

    @text('description') description: string;
    @field('year') year: number | null;
}