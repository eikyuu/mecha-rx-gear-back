import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('gunpla_id').unsigned().references('gunplas.id').onDelete('CASCADE')
      table.string('message').notNullable()
      table.boolean('is_read').defaultTo(false)
      table.integer('priceThreshold').notNullable()
      table.string('notificationMethod').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}