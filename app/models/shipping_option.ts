import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Transaction from './transaction.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class ShippingOption extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare currency: string

  @hasMany(() => Transaction)
  declare transactions: HasMany<typeof Transaction>
}