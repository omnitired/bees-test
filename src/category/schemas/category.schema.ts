import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true })
  name: string;

  @Prop()
  parent?: string;

  @Prop({ default: -1 })
  discountPercentage: number;

  @Prop({ default: new Date() })
  createdAt?: Date;

  @Prop()
  deletedAt?: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
