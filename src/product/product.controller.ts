import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiSecurity } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetDiscountDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post('discount')
  @ApiSecurity('bearerAuth')
  @ApiBody({
    schema: {
      type: 'object',
      example: {
        productName: 'Moby Dick',
        invoiceFinalAmount: 0,
      },
    },
  })
  async getDiscountForProduct(@Body() getDiscountDto: GetDiscountDto) {
    return await this.productService.getDiscountForProduct(getDiscountDto);
  }
}
