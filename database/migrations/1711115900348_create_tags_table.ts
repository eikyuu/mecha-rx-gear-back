import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tags'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')
       table.string('name', 255).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}