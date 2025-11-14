import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OurTeamPageController } from './our-team-page.controller';
import { OurTeamPageService } from './our-team-page.service';

@Module({
  controllers: [OurTeamPageController],
  providers: [OurTeamPageService, PrismaService],
})
export class OurTeamPageModule {}
