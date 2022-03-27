import { Schema, model } from 'mongoose';
import { Pizza } from '../interfaces/Pizza';

const schema = new Schema<Pizza>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  active: { type: Boolean, default: true },
});

export const PizzaModel = model<Pizza>('Pizza', schema);
