import { Module } from '@nestjs/common';
import { ProductsLangService } from './products-lang.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsLang } from 'src/products-lang/entities/products-lang.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsLang])
  ],
  providers: [ProductsLangService],
  exports: [ProductsLangService]
})
export class ProductsLangModule { }
