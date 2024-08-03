import { Test, TestingModule } from '@nestjs/testing';
import { ProductsLangService } from './products-lang.service';

describe('ProductsLangService', () => {
  let service: ProductsLangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsLangService],
    }).compile();

    service = module.get<ProductsLangService>(ProductsLangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
