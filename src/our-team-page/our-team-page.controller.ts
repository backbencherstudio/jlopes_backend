import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOurTeamPageDto } from './dto/create-our-team-page.dto';
import { UpdateOurTeamPageDto } from './dto/update-our-team-page.dto';
import { OurTeamPageService } from './our-team-page.service';

@Controller('our-team-page')
export class OurTeamPageController {
  constructor(private readonly ourTeamPageService: OurTeamPageService) {}

  @Post()
  create(@Body() data: CreateOurTeamPageDto) {
    return this.ourTeamPageService.create(data);
  }

  @Get()
  findAll() {
    return this.ourTeamPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourTeamPageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOurTeamPageDto: UpdateOurTeamPageDto,
  ) {
    return this.ourTeamPageService.update(+id, updateOurTeamPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourTeamPageService.remove(+id);
  }
}
