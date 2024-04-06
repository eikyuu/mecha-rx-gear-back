import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Gunpla from './gunpla.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class PurchaseHistory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare gunplaId: number

  @column()
  declare userId: number

  @column()
  declare purchaseDate: DateTime
  
  @column()
  declare pricePaid: number

  @belongsTo(() => Gunpla)
  declare gunpla: BelongsTo<typeof Gunpla>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}