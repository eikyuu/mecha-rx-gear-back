import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tag_gunpla'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('tag_id').unsigned().references('tags.id').onDelete('CASCADE')
      table.integer('gunpla_id').unsigned().references('gunplas.id').onDelete('CASCADE')
      table.unique(['tag_id', 'gunpla_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}