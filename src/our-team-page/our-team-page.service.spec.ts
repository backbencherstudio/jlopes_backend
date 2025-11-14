import { Test, TestingModule } from '@nestjs/testing';
import { OurTeamPageService } from './our-team-page.service';

describe('OurTeamPageService', () => {
  let service: OurTeamPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OurTeamPageService],
    }).compile();

    service = module.get<OurTeamPageService>(OurTeamPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
