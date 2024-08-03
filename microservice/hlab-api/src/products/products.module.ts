import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsTypeModule } from 'src/products-type/products-type.module';
import { ProductsContentModule } from 'src/products-content/products-content.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Products]),
    ProductsTypeModule,
    ProductsContentModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule { }
