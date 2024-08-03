import { Module } from '@nestjs/common';
import { ProductsTypeService } from './products-type.service';
import { ProductsType } from './entities/products-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsType])],
  providers: [ProductsTypeService],
  exports: [ProductsTypeService]
})
export class ProductsTypeModule { }
