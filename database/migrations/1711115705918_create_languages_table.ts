import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'languages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name').notNullable()
      table.string('code').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}