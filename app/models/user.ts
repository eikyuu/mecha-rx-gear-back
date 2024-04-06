import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeSave, column, hasMany } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Wishlist from './wishlist.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Review from './review.js'
import Notification from './notification.js'
import Recommendation from './recommendation.js'
import PurchaseHistory from './purchase_history.js'
import Transaction from './transaction.js'


const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => Wishlist)
  declare wishlists: HasMany<typeof Wishlist>

  @hasMany(() => Review)
  declare review: HasMany<typeof Review>

  @hasMany(() => Notification)
  declare notifications: HasMany<typeof Notification>

  @hasMany(() => Recommendation)
  declare recommendations: HasMany<typeof Recommendation>

  @hasMany(() => PurchaseHistory)
  declare purchaseHistories: HasMany<typeof PurchaseHistory>

  @hasMany(() => Transaction)
  declare transactions: HasMany<typeof Transaction>

  static accessTokens = DbAccessTokensProvider.forModel(User)

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password) 
    }
  }
}