import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  mobileNumber: string;

  @Prop({ default: new Date() })
  createdAt?: Date;

  @Prop()
  deletedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
