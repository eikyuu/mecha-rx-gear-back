import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shipping_options'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('name').notNullable()
      table.integer('price').notNullable()
      table.string('currency').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}