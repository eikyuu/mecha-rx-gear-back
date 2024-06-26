import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Gunpla from './gunpla.js'

export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare userId: number

  @column()
  declare gunplaId: number

  @column()
  declare message: string

  @column()
  declare isRead: boolean

  @column()
  declare priceThreshold: number

  @column()
  declare notificationMethod: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Gunpla)
  declare gunpla: BelongsTo<typeof Gunpla>
}