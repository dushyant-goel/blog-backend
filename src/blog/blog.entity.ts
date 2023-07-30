// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from '../users/user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Blog {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  //   @ManyToOne(() => User, (user) => user.blogs)
  //   author: User;
}
