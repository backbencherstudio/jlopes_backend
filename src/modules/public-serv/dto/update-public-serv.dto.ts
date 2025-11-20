import { PartialType } from '@nestjs/swagger';
import { CreatePublicServDto } from './create-public-serv.dto';

export class UpdatePublicServDto extends PartialType(CreatePublicServDto) {}
