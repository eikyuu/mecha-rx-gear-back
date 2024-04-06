import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'retailers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('name').notNullable()
      table.string('website').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}