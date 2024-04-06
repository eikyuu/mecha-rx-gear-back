import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'purchase_histories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('gunpla_id').unsigned().references('gunplas.id').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('pricePaid').notNullable()
      table.timestamp('purchaseDate').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}