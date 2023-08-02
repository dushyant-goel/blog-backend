import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Field } from '@nestjs/graphql';
import { Blog } from './blog.entity';
import { BlogService } from './blog.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => [Blog], { name: 'blogs' })
  async getAllBlogs() {
    return this.blogService.findAll();
  }

  @Query(() => Blog, { name: 'getBlog' })
  async getBlogById(@Args('id') id: number) {
    console.log(`Resolver: ${id}`);
    return this.blogService.findOne(id);
  }

  @Mutation(() => Blog, { name: 'createBlog' })
  @UseGuards(AuthGuard)
  async createBlog(
    @Args('title') title: string,
    @Args('content') content: string,
    @Args('authorId') authorId: number,
  ): Promise<Blog> {
    const blog = await this.blogService.create(title, content, authorId);
    return blog;
  }
}
