import { Schema, model } from 'mongoose';
import { Order } from '../interfaces/Order';

const schema = new Schema<Order>(
  {
    item: { type: Schema.Types.ObjectId, ref: 'Pizza', required: true },
    total: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ['PENDING', 'PREPARING', 'DONE', 'CANCELLED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const OrderModel = model<Order>('Order', schema);
