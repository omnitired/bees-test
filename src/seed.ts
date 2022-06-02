import { Injectable } from '@nestjs/common';
import { ProductService } from './product/product.service';
import { Command, Positional } from 'nestjs-command';
import { CategoryService } from './category/category.service';
import { UserService } from './user/user.service';

const users = [
  {
    name: 'mehrdad',
    mobileNumber: '09121234567',
  },
];

const categories = [
  {
    name: 'art and books',
    discountPercentage: -1,
  },
  {
    name: 'books',
    parent: 'art and books',
    discountPercentage: 5,
  },
  {
    name: 'programming',
    parent: 'books',
    discountPercentage: -1,
  },
  {
    name: 'databases',
    parent: 'programming',
    discountPercentage: -1,
  },
  {
    name: 'programming languages',
    parent: 'programming',
    discountPercentage: -1,
  },
  {
    name: 'fantasy',
    parent: 'books',
    discountPercentage: -1,
  },
  {
    name: 'fiction',
    parent: 'books',
    discountPercentage: -1,
  },
];

const products = [
  {
    name: 'The Lord of the Rings (The Fellowship of the Ring)',
    category: 'fantasy',
    discountPercentage: 10,
    price: 10.0,
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    category: 'fantasy',
    discountPercentage: -1,
    price: 11.5,
  },
  {
    name: 'Moby Dick',
    category: 'fiction',
    discountPercentage: -1,
    price: 11.5,
  },
  {
    name: 'Design Patterns',
    category: 'programming',
    discountPercentage: -1,
    price: 11.5,
  },
  {
    name: 'Atomic Habits',
    category: 'self help',
    discountPercentage: -1,
    price: 11.5,
  },
  {
    name: "You Don't Know JS",
    category: 'programming languages',
    discountPercentage: -1,
    price: 11.5,
  },
  {
    name: 'Mastering PostgreSQL',
    category: 'Databases',
    discountPercentage: -1,
    price: 11.5,
  },
];

@Injectable()
export class DataSeed {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly userService: UserService,
  ) {}
  @Command({ command: 'seed', describe: 'seed data' })
  async create() {
    console.log('seeding');

    await this.userService.resetWithSeed(users);
    await this.categoryService.resetWithSeed(categories);
    await this.productService.resetWithSeed(products);
  }
}
