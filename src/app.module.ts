import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    BookModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://booksDbUser:CXc1Cfw9qBC5BRwA@books-cluster.7w4zvpw.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
