import { Schema } from 'mongoose';

export interface Order {
  item: Schema.Types.ObjectId;
  quantity: number;
  total: number;
  status: 'PENDING' | 'PREPARING' | 'DONE' | 'CANCELLED';
}
