import { ApiProperty } from '@nestjs/swagger';
export class GetDiscountDto {
  productName: string;
  invoiceFinalAmount: number;
}
