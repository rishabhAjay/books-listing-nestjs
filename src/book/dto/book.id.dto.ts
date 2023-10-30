import { IsString } from 'class-validator';

export default class BookIdDto {
  @IsString()
  id: string;
}
