import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookSchema, Book } from './book.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from 'src/author/author.model';
import BookRepository from 'src/repository/book.repository';
@Module({
  controllers: [BookController],
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  providers: [{ provide: 'BookRepository', useClass: BookRepository }],
})
export class BookModule {}
