import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Author {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
