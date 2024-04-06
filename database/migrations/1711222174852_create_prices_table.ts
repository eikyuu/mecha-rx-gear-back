import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'prices'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('retailer_id').unsigned().references('retailers.id').onDelete('CASCADE')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}