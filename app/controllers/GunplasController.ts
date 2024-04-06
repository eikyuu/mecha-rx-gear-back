import Category from "#models/category";
import Gunpla from "#models/gunpla";
import Tag from "#models/tag";
import { HttpContext } from "@adonisjs/core/http";

export default class GunplasController {
    async index({}: HttpContext) {
        return Gunpla.all();
    }

    async search({ request, response }: HttpContext) {
        try {
            const query = request.all();
            const searchTerm = query.search.toLowerCase();
            
            if (!searchTerm) {
                return response.status(400).send({ message: 'Search term is required' });
            }

            const categories = await Category.query().whereRaw('LOWER(name) LIKE ?', [`%${searchTerm}%`]).exec();

            const tags = await Tag.query().whereRaw('LOWER(name) LIKE ?', [`%${searchTerm}%`]).exec();
        
            const gunplas = await Gunpla.query().whereRaw('LOWER(name) LIKE ?', [`%${searchTerm}%`]).exec();

            const results = {
                categories: categories,
                tags: tags,
                gunplas: gunplas
            }

            return response.status(200).send(results);
        } catch (error) {
            console.error(error);
            return response.status(500).send({ message: 'Internal server error' });
        }
    }

}