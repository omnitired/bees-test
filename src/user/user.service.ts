import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async readByMobileNumber(mobileNumber: string): Promise<User> {
    return await this.model.findOne({ mobileNumber }).exec();
  }

  async create(user: User): Promise<User> {
    const newUser = new this.model({ ...user, createdAt: new Date() });
    return newUser.save();
  }

  async readAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async readById(id: string): Promise<User> {
    return await this.model.findById(id).exec();
  }

  async update(id, user: User): Promise<User> {
    return await this.model.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.model.findByIdAndRemove(id);
  }

  async resetWithSeed(users: User[]): Promise<any> {
    await this.model.deleteMany({});
    await this.model.insertMany(
      users.map((user) => ({ ...user, createdAt: new Date() })),
    );
  }
}
