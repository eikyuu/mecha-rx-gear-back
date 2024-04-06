import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'category_gunpla'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('category_id').unsigned().references('categories.id').onDelete('CASCADE')
      table.integer('gunpla_id').unsigned().references('gunplas.id').onDelete('CASCADE')
      table.unique(['category_id', 'gunpla_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}