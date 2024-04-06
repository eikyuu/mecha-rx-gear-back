import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('gunpla_id').unsigned().references('gunplas.id').onDelete('CASCADE')
      table.integer('retailer_id').unsigned().references('retailers.id').onDelete('CASCADE')
      table.integer('payment_method_id').unsigned().references('payment_methods.id').onDelete('CASCADE')
      table.integer('shipping_option_id').unsigned().references('shipping_options.id').onDelete('CASCADE')
      table.timestamp('transactionDate').notNullable()
      table.integer('totalAmount').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}