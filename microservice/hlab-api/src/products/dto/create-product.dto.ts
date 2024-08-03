import {
  IsString,IsNotEmpty,IsNumber,IsOptional,IsArray,ValidateNested
} from 'class-validator';


class ProductContentDto {
  @IsNumber()
  lang_id: number;

  @IsString()
  type: string;

  @IsString()
  text: string;
}

export class CreateProductDto {
  @IsString()
  products_code: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  type_id: number;

  @IsArray()
  @ValidateNested({ each: true })
  product_content: ProductContentDto[];
}
