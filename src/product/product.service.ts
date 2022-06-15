import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryService } from '../category/category.service';
import { GetDiscountDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly model: Model<ProductDocument>,
    private readonly categoryService: CategoryService,
  ) {}

  async getDiscountForProduct(getDiscountDto: GetDiscountDto): Promise<number> {
    // TODO: some business logic on the invoice amount and user id here

    const product = await this.model
      .findOne({ name: getDiscountDto.productName })
      .exec();

    if (!product) {
      throw new Error('Product not found');
    }
    if (product.discountPercentage > 0) {
      return product.discountPercentage;
    }

    const parentDiscount = this.getParentDiscount(product.category);
    return parentDiscount;
  }

  async getParentDiscount(parentName) {
    const category = await this.categoryService.readByName(parentName);
    if (category.discountPercentage > -1) {
      return category.discountPercentage;
    }
    if (!category.parent) {
      return -1;
    }
    return this.getParentDiscount(category.parent);
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.model({ ...product, createdAt: new Date() });
    return newProduct.save();
  }

  async readAll(): Promise<Product[]> {
    return await this.model.find().exec();
  }

  async readById(id): Promise<Product> {
    return await this.model.findById(id).exec();
  }

  async update(id, Product: Product): Promise<Product> {
    return await this.model.findByIdAndUpdate(id, Product, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.model.findByIdAndRemove(id);
  }

  async resetWithSeed(products: Product[]): Promise<any> {
    await this.model.deleteMany({});
    await this.model.insertMany(
      products.map((product) => ({ ...product, createdAt: new Date() })),
    );
  }
}
