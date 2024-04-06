import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Price from './price.js'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Wishlist from './wishlist.js'
import Review from './review.js'
import Recommendation from './recommendation.js'
import Category from './category.js'
import Tag from './tag.js'

export default class Gunpla extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare series: string

  @column()
  declare image: string

  @column()
  declare description: string

  @column()
  declare grade: string

  @column()
  declare releaseDate: string

  @column()
  declare size: string

  @column()
  declare manufacturer: string

  @hasMany(() => Price)
  declare prices: HasMany<typeof Price>

  @hasMany(() => Wishlist)
  declare wishlists: HasMany<typeof Wishlist>

  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>

  @hasMany(() => Recommendation)
  declare recommendations: HasMany<typeof Recommendation>

  @manyToMany(() => Category)
  declare categories: ManyToMany<typeof Category>

  @manyToMany(() => Tag)
  declare tags: ManyToMany<typeof Tag>

}