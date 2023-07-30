import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { User } from 'src/users/user.entity';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.findAll();
  }
}
