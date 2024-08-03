import { Test, TestingModule } from '@nestjs/testing';
import { ProductsContentService } from './products-content.service';

describe('ProductsContentService', () => {
  let service: ProductsContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsContentService],
    }).compile();

    service = module.get<ProductsContentService>(ProductsContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
