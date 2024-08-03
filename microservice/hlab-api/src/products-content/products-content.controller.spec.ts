import { Test, TestingModule } from '@nestjs/testing';
import { ProductsContentController } from './products-content.controller';
import { ProductsContentService } from './products-content.service';

describe('ProductsContentController', () => {
  let controller: ProductsContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsContentController],
      providers: [ProductsContentService],
    }).compile();

    controller = module.get<ProductsContentController>(ProductsContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
