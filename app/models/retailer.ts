import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Price from './price.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Retailer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare website: string

  @hasMany(() => Price)
  declare prices: HasMany<typeof Price>

}