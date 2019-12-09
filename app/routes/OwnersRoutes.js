const Routes = require('express').Router();
const OwnerController = require('../controllers/OwnerController');

Routes.post('/signin',OwnerController.signin);
Routes.post('/login',OwnerController.login);

Routes.get('/',OwnerController.getOwners);
Routes.get('/owner/:id',OwnerController.findOwnerById);

Routes.put('/:id',OwnerController.updateOwner);
Routes.delete('/:id',OwnerController.deletesOwner);
module.exports=Routes;