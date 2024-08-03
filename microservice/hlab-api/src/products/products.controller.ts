import { Controller,Get,Post,Body,Patch,Param,Delete,Query,Headers,UsePipes,ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Public()
  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createProductDto: CreateProductDto) {
    try {
      const product = this.productsService.create(createProductDto);

      return {
        data: createProductDto // or product if using a service
      };
    } catch (err) {
      return {
        error: err.message
      };
    }
  }

  @Get()
  findAll(
    @Headers('accept-language') lang: string,
    @Query('products_id') products_id: number,
    @Query('page') page: number,
    @Query('filter') filter: string,
    @Query('search') search: string,
  ) {

    try {
      return {
        data: ''
      }
    } catch (err) {
      return {
        error: err.message
      }
    }
  }

}
