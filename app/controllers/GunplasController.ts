// import type { HttpContext } from '@adonisjs/core/http'

import Gunpla from "#models/gunpla";
import { HttpContext } from "@adonisjs/core/http";

export default class GunplasController {
    async index({}: HttpContext) {
        return Gunpla.all();
    }
}