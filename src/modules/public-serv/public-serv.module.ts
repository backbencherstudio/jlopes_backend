import { Module } from '@nestjs/common';
import { PublicServService } from './public-serv.service';
import { PublicServController } from './public-serv.controller';

@Module({
  controllers: [PublicServController],
  providers: [PublicServService],
})
export class PublicServModule {}
