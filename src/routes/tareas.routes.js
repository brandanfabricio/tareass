const {Router} = require('express');
const { tareasGet } = require('../controllers/tareas.controllers');

const router = Router();




router.get('/',tareasGet)
module.exports=router;