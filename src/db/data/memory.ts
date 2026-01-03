import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class Memory extends Model {
  static table = 'memories'

  @field('title') title?: string
  @field('description') description!: string
  @field('year') year?: number | null
  @field('date') date!: number
}