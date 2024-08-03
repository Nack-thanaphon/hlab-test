import { IsString, IsInt, IsNotEmpty, IsDate } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  lang: number;
}
