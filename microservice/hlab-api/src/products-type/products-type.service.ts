import { Injectable } from '@nestjs/common';
import { ProductsType } from 'src/products-type/entities/products-type.entity';
import { CrudService } from 'src/libs/common/src';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsTypeService extends CrudService<ProductsType> {
  constructor(
    @InjectRepository(ProductsType)
    private readonly productsTypeRepository: Repository<ProductsType>,
  ) {
    super(productsTypeRepository);
  }
}
