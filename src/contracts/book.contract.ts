import { Book } from 'src/book/book.model';

export default interface BookRepositoryInterface {
  findAll(): Promise<Book[]>;
  create(data: object): Promise<Book>;
  findById(id: string): Promise<Book>;
  update(id: string, data: object): Promise<Book>;
  delete(id: string): Promise<Book>;
  validateId(id: string): boolean;
}
