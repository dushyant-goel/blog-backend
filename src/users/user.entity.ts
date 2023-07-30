// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Blog } from '../blog/blog.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;

  //   @OneToMany(() => Blog, (blog) => blog.author)
  //   blogs: Blog[];
}
