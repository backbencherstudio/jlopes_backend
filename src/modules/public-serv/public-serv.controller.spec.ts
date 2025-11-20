import { Test, TestingModule } from '@nestjs/testing';
import { PublicServController } from './public-serv.controller';
import { PublicServService } from './public-serv.service';

describe('PublicServController', () => {
  let controller: PublicServController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicServController],
      providers: [PublicServService],
    }).compile();

    controller = module.get<PublicServController>(PublicServController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
