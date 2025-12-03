import { PartialType } from '@nestjs/mapped-types';
import { CreateTalkDto } from './create-talk.dto';
import { Talk } from '../entities/talk.entity';

export class UpdateTalkDto extends PartialType(CreateTalkDto) {}