import mongoose, { Model } from 'mongoose';
import { Book } from 'src/book/book.model';
import BookRepositoryInterface from 'src/contracts/book.contract';
import { InjectModel } from '@nestjs/mongoose';
import CreateBookDto from 'src/book/dto/create.book.dto';

export default class BookRepository implements BookRepositoryInterface {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createBook = new this.bookModel(createBookDto);
    return createBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().populate('author').exec();
  }

  async findById(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async update(_id: string, updateBookDto: CreateBookDto): Promise<Book> {
    return this.bookModel.findOneAndUpdate({ _id }, updateBookDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }

  validateId(id: string): boolean {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return true;
    } else return false;
  }
}
