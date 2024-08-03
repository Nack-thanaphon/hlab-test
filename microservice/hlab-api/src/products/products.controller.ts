import { Body,Controller,Get,Headers,Post,Query,UsePipes,ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createProductDto: CreateProductDto): Promise<any> {
    try {
      const product = await this.productsService.createProducts(createProductDto);
      if (product && typeof product !== 'string') {
        return {
          status: 200,
          message: product.message,
          data: product.data,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        status: 404,
        message: 'เกิดข้อผิดพลาด',
        data: [],
      };
    }
  }

  @Get()
  findAll(
    @Headers('accept-language') lang: string,
    @Query('product_code') product_id: number,
    @Query('page') page: number,
    @Query('filter') filter: string,
    @Query('search') search: string,
  ) {
    try {
      return {
        data: '',
      };
    } catch (err) {
      return {
        error: err.message,
      };
    }
  }
}
