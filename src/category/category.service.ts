import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly model: Model<CategoryDocument>,
  ) {}

  async create(category: Category): Promise<Category> {
    const newCategory = new this.model({ ...category, createdAt: new Date() });
    return newCategory.save();
  }

  async readAll(): Promise<Category[]> {
    return await this.model.find().exec();
  }

  async readByName(name: string): Promise<Category> {
    return await this.model.findOne({ name }).exec();
  }

  async update(id, category: Category): Promise<Category> {
    return await this.model.findByIdAndUpdate(id, category, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.model.findByIdAndRemove(id);
  }

  async resetWithSeed(categories: Category[]): Promise<any> {
    await this.model.deleteMany({});
    await this.model.insertMany(
      categories.map((category) => ({ ...category, createdAt: new Date() })),
    );
  }
}
