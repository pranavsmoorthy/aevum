import { Model } from '@nozbe/watermelondb'
import { field, readonly, date } from '@nozbe/watermelondb/decorators'

export default class ChatMessage extends Model {
  static table = 'chat_messages'

  @field('sender') sender!: 'user' | 'ai'
  @field('text') text!: string
  @readonly @date('created_at') createdAt!: Date
}
