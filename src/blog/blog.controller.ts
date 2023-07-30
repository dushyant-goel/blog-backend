import { Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post()
  async createBlog(
    title: string,
    content: string,
    authorId: number,
  ): Promise<Blog> {
    return this.blogService.create(title, content, authorId);
  }

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async getOneBlog(id: number): Promise<Blog> {
    return this.blogService.findOne(id);
  }
}
