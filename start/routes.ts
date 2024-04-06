/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import GunplasController from '#controllers/GunplasController'
import router from '@adonisjs/core/services/router'

router.get('gunplas', [GunplasController, 'index'])
router.get('gunplas/search', [GunplasController, 'search'])
