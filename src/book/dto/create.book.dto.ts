import { IsString, IsNumber, IsDateString } from 'class-validator';

export default class CreateBookDto {
  @IsString()
  title: string;
  @IsString()
  description?: string;
  @IsNumber()
  price: number;
  @IsDateString()
  publishDate: Date;
  @IsString()
  author: string;
}
