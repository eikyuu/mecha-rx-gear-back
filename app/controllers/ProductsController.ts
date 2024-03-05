// import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
    async index() {
        return [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' }
        ]
    }
}