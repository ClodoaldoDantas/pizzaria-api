import { Request, Response } from 'express';
import { PizzaModel } from '../models/Pizza';

export class PizzasController {
  async create(request: Request, response: Response) {
    const { name, description, price, active = true, image } = request.body;

    const pizza = await PizzaModel.create({
      name,
      description,
      price,
      active,
      image,
    });

    return response.json(pizza);
  }

  async findAll(request: Request, response: Response) {
    const pizzas = await PizzaModel.find();
    return response.json(pizzas);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const pizza = await PizzaModel.findById(id);
    return response.json(pizza);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, price, active, image } = request.body;

    const pizza = await PizzaModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        active,
        image,
      },
      { new: true }
    );

    return response.json(pizza);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    await PizzaModel.findByIdAndRemove(id);
    return response.sendStatus(204);
  }
}
