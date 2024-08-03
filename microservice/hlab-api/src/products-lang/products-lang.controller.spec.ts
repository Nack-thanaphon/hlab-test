import { Test, TestingModule } from '@nestjs/testing';
import { ProductsLangController } from './products-lang.controller';
import { ProductsLangService } from './products-lang.service';

describe('ProductsLangController', () => {
  let controller: ProductsLangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsLangController],
      providers: [ProductsLangService],
    }).compile();

    controller = module.get<ProductsLangController>(ProductsLangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
