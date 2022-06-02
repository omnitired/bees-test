import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ default: -1 })
  discountPercentage: number;

  @Prop({ default: new Date() })
  createdAt?: Date;

  @Prop()
  deletedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
