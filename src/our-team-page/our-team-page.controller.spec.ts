import { Test, TestingModule } from '@nestjs/testing';
import { OurTeamPageController } from './our-team-page.controller';
import { OurTeamPageService } from './our-team-page.service';

describe('OurTeamPageController', () => {
  let controller: OurTeamPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OurTeamPageController],
      providers: [OurTeamPageService],
    }).compile();

    controller = module.get<OurTeamPageController>(OurTeamPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
