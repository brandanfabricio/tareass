const {Router} = require('express');
const tareasGetController= require('../controllers/tareas.controllers');

const router = Router();




router.get('/',tareasGetController.get)
router.post('/add',tareasGetController.add)
router.put('/:id',tareasGetController.put)
router.delete('/:id',tareasGetController.borrar)
router.get('/:id',tareasGetController.buscar)


module.exports=router;