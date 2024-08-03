import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsLangDto } from './create-products-lang.dto';

export class UpdateProductsLangDto extends PartialType(CreateProductsLangDto) {}
