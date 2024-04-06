import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Gunpla from './gunpla.js'
import Retailer from './retailer.js'
import ShippingOption from './shipping_option.js'
import PaymentMethod from './payment_method.js'

export default class Transaction extends BaseModel {
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
  declare retailerId: number

  @column()
  declare paymentId: number

  @column()
  declare shippingOptionId: number

  @column()
  declare transactionDate: DateTime

  @column()
  declare totalAmount: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Gunpla)
  declare gunpla: BelongsTo<typeof Gunpla>
  
  @belongsTo(() => Retailer)
  declare retailer: BelongsTo<typeof Retailer>

  @belongsTo(() => ShippingOption)
  declare shippingOption: BelongsTo<typeof ShippingOption>

  @belongsTo(() => PaymentMethod)
  declare payment: BelongsTo<typeof PaymentMethod>
}