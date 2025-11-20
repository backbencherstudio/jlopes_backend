import { Test, TestingModule } from '@nestjs/testing';
import { PublicServService } from './public-serv.service';

describe('PublicServService', () => {
  let service: PublicServService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicServService],
    }).compile();

    service = module.get<PublicServService>(PublicServService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
