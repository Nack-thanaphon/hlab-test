import { forwardRef, Module } from '@nestjs/common';
import { ProductsContentService } from './products-content.service';
import { ProductsContentController } from './products-content.controller';
import { ProductsContent } from 'src/products-content/entities/products-content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsContent]),
    forwardRef(() => ProductsModule)
  ],
  controllers: [ProductsContentController],
  providers: [ProductsContentService],
  exports: [ProductsContentService]
})
export class ProductsContentModule { }
