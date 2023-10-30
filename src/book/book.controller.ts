import {
  Controller,
  Get,
  Inject,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import BookRepositoryInterface from 'src/contracts/book.contract';
import CreateBookDto from './dto/create.book.dto';
import { Model } from 'mongoose';
import { Author } from 'src/author/author.model';
import { InjectModel } from '@nestjs/mongoose';
import { ResponseInterceptor } from 'src/handlers/success.interceptor';
import {
  ERROR_RESPONSE_HANDLERS,
  SUCCESS_RESPONSE_HANDLERS,
} from 'src/utils/constants';

@Controller('book')
export class BookController {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: BookRepositoryInterface,
    @InjectModel(Author.name) private authorModel: Model<Author>,
  ) {}

  @Get()
  @UseInterceptors(
    new ResponseInterceptor(SUCCESS_RESPONSE_HANDLERS.fetched_all_books),
  )
  async findAllBooks() {
    return this.bookRepository.findAll();
  }

  @Post()
  @UseInterceptors(
    new ResponseInterceptor(SUCCESS_RESPONSE_HANDLERS.created_book),
  )
  async createBook(@Body() createBookDto: CreateBookDto) {
    if (!this.bookRepository.validateId(createBookDto.author)) {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.author_does_not_exist,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.bookRepository.create(createBookDto);
  }

  @Get(':id')
  @UseInterceptors(
    new ResponseInterceptor(SUCCESS_RESPONSE_HANDLERS.fetched_book),
  )
  async findBookById(@Param('id') id: string) {
    if (!this.bookRepository.validateId(id)) {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.invalid_id,
        HttpStatus.NOT_FOUND,
      );
    }
    const book = await this.bookRepository.findById(id);
    if (book) {
      return book;
    } else {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.book_does_not_exist,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Put(':id')
  @UseInterceptors(
    new ResponseInterceptor(SUCCESS_RESPONSE_HANDLERS.updated_book),
  )
  async updateBook(
    @Param('id') id: string,
    @Body() updateBookDto: CreateBookDto,
  ) {
    if (!this.bookRepository.validateId(id)) {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.invalid_id,
        HttpStatus.NOT_FOUND,
      );
    }
    if (!this.bookRepository.validateId(updateBookDto.author)) {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.author_does_not_exist,
        HttpStatus.NOT_FOUND,
      );
    }
    const book = await this.bookRepository.update(id, updateBookDto);
    if (book) {
      return book;
    } else {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.book_does_not_exist,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete(':id')
  @UseInterceptors(
    new ResponseInterceptor(SUCCESS_RESPONSE_HANDLERS.deleted_book),
  )
  async deleteBookById(@Param('id') id: string) {
    if (!this.bookRepository.validateId(id)) {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.invalid_id,
        HttpStatus.NOT_FOUND,
      );
    }
    const book = await this.bookRepository.delete(id);
    if (book) {
      return;
    } else {
      throw new HttpException(
        ERROR_RESPONSE_HANDLERS.book_does_not_exist,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
