import { PartialType } from '@nestjs/swagger';
import { CreateOurTeamPageDto } from './create-our-team-page.dto';

export class UpdateOurTeamPageDto extends PartialType(CreateOurTeamPageDto) {}
