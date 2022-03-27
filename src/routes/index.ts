import { Router } from 'express';
import { PizzasController } from '../controllers/PizzasController';
import { OrdersController } from '../controllers/OrdersController';

const routes = Router();
const pizzasController = new PizzasController();
const ordersController = new OrdersController();

routes.post('/pizzas', pizzasController.create);
routes.get('/pizzas', pizzasController.findAll);
routes.get('/pizzas/:id', pizzasController.findById);
routes.put('/pizzas/:id', pizzasController.update);
routes.delete('/pizzas/:id', pizzasController.delete);

routes.post('/orders', ordersController.create);
routes.get('/orders', ordersController.findAll);
routes.get('/orders/:id', ordersController.findById);
routes.patch('/orders/:id', ordersController.updateStatus);

export { routes };
