import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Blog } from '../blogs/blog.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Blog, (blog) => blog.author)
  blogs: Blog[];
}
