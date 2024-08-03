import { BadRequestException,Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CrudService } from 'src/libs/common/src';
import { Products } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsTypeService } from 'src/products-type/products-type.service';
import { ProductsContentService } from 'src/products-content/products-content.service';

@Injectable()
export class ProductsService extends CrudService<Products> {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
    private readonly productsTypeService: ProductsTypeService,
    private readonly productsContentService: ProductsContentService,
  ) {
    super(productsRepository);
  }

  async createProducts(createProductDto: {
    products_code: string;
    description: string;
    price: number;
    type_id: number;
    product_content: {
      lang_id: number,
      type: string,
      text: string
    }[];
  }) {
    const { type_id,product_content } = createProductDto;

    if (type_id) {
      const type = await this.productsTypeService.findOne({ where: { id: type_id } });
      if (!type) {
        const validTypes = await this.productsTypeService.findAll();
        console.log(validTypes);
        if (validTypes.length === 0) {
          return 'No valid product types available.';
        }
        const validTypeIds = validTypes.map(t => t.id);
        return `Invalid type_id. Valid type_ids are: ${validTypeIds.join(', ')}`;
      }
    }

    const existingProduct = await this.findOne({
      where: {
        products_code: createProductDto.products_code,
      }
    });

    if (!existingProduct) {


      const data = await this.create(createProductDto);

      if (data && product_content.length > 0) {
        await Promise.all(product_content.map(async (content) => {
          const existingContent = await this.productsContentService.findOne({
            where: {
              product_id: data.id,
              lang_id: content.lang_id,
              type: content.type,
            }
          });

          if (existingContent) {
            await this.productsContentService.update(existingContent.id,{
              text: content.text,
            });
          } else {
            await this.productsContentService.create({
              product_id: data.id,
              lang_id: content.lang_id,
              type: content.type,
              text: content.text,
            });
          }
        }));
      }

      return {
        status: 200,
        message: 'Product Created Successfully',
        data: data
      }
    } else {
      return {
        status: 304,
        message: 'Product already exists',
        data: []
      };
    }
  }

  async getProductsId(product_code: string) {
    const product = await this.findOne({
      where: {
        products_code: product_code,
      }
    });

    if (product) {
      return product.id;
    } else {
      return null;
    }
  }
}
