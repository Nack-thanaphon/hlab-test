import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsContent } from './entities/products-content.entity';
import { Repository } from 'typeorm';
import { CrudService } from 'src/libs/common/src';

@Injectable()
export class ProductsContentService extends CrudService<ProductsContent> {
  constructor(
    @InjectRepository(ProductsContent)
    private readonly productsContentRepository: Repository<ProductsContent>,
  ) {
    super(productsContentRepository);
  }


  async updateContent(product_id: number,lang_id: number,type: string,text: string) {
    try {
      const existingContent = await this.findOne({
        where: {
          product_id,
          lang_id: lang_id,
          type: type,
        }
      });

      if (existingContent) {
        existingContent.text = text;
        await this.productsContentRepository.save(existingContent);
        return {
          message: 'Content updated successfully',
          data: existingContent,
        };
      } else {
        return {
          message: 'Content not found',
          data: [],
        };
      }
    } catch (err) {
      console.log(err);
      return {
        message: 'Error updating content',
        data: [],
      };
    }
  }
}
