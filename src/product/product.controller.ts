import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetDiscountDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post('discount')
  async getDiscountForProduct(@Body() getDiscountDto: GetDiscountDto) {
    return await this.productService.getDiscountForProduct(getDiscountDto);
  }
}
