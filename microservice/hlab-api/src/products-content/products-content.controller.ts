import { Controller,Get,Post,Body,Patch,Param,Delete } from '@nestjs/common';
import { ProductsContentService } from './products-content.service';
import { UpdateProductsLangDto } from 'src/products-lang/dto/update-products-lang.dto';
import { ProductsService } from 'src/products/products.service';

@Controller('products-content')
export class ProductsContentController {
  constructor(private readonly productsContentService: ProductsContentService,

    private readonly productsService: ProductsService
  ) { }

  @Patch('update/:product_code')
  async update(
    @Param('product_code') product_code: string,
    @Body('lang_id') lang_id: number,
    @Body('type') type: string,
    @Body('text') text: string
  ) {
    try {
      const product_id = await this.productsService.getProductsId(product_code);
      if (product_id && typeof product_id === typeof lang_id) {
        const product = await this.productsContentService.updateContent(product_id,lang_id,type,text);
        if (product && typeof product !== 'string') {
          return {
            status: 200,
            message: product.message,
            data: product.data,
          };
        }
      } else {
        return {
          status: 400,
          message: 'Invalid product_id or type mismatch with lang_id',
          data: [],
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
}
