import { Injectable } from '@nestjs/common';
import { CreateProductsLangDto } from './dto/create-products-lang.dto';
import { UpdateProductsLangDto } from './dto/update-products-lang.dto';
import { ProductsLang } from './entities/products-lang.entity';
import { CrudService } from 'src/libs/common/src';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsLangService extends CrudService<ProductsLang> {
  constructor(
    @InjectRepository(ProductsLang)
    private readonly productsLangRepository: Repository<ProductsLang>,
  ) {
    super(productsLangRepository);
  }
}
