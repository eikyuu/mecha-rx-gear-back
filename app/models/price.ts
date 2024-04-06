import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Gunpla from './gunpla.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Retailer from './retailer.js'

export default class Price extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare price: number

  @column()
  declare gunplaId: number

  @column()
  declare retailerId: number

  @column()
  declare priceCurrency: string

  @belongsTo(() => Gunpla)
  declare gunpla: BelongsTo<typeof Gunpla>

  @belongsTo(() => Retailer)
  declare retailer: BelongsTo<typeof Retailer>
}