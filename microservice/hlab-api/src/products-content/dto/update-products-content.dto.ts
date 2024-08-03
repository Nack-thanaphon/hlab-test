import { IsString, IsOptional } from 'class-validator';

export class UpdateProductsContentDto {
  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  text: string;
}
