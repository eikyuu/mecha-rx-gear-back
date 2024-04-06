import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gunplas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('name').notNullable()
      table.string('series').notNullable()
      table.string('image').notNullable()
      table.string('description').notNullable()
      table.string('grade').notNullable()
      table.string('release_date').notNullable()
      table.string('size').notNullable()
      table.string('manufacturer').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}