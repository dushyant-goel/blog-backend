import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find({ relations: ['author'] });
    // return this.blogRepository.find();
  }

  async findOne(id: number): Promise<Blog> {
    return this.blogRepository.findOneBy({ id });
  }

  async create(
    title: string,
    content: string,
    authorId: number,
  ): Promise<Blog> {
    const blog = this.blogRepository.create({
      title,
      content,
      author: { id: authorId },
    });
    console.log('Created Blog:', blog);
    return this.blogRepository.save(blog);
  }
}
