import { Resolver, Query, Mutation, Args, Field } from '@nestjs/graphql';
import { Blog } from './blog.entity';
import { BlogService } from './blog.service';

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => [Blog], { name: 'blogs' })
  async getAllBlogs() {
    return this.blogService.findAll();
  }

  @Query(() => Blog, { name: 'getBlogById' })
  async getBlogById(@Args('id') id: number) {
    return this.blogService.findOne(id);
  }

  @Mutation(() => Blog)
  async createBlog(
    @Args('title') title: string,
    @Args('content') content: string,
    @Args('authorId') authorId: number,
  ): Promise<Blog> {
    const blog = await this.blogService.create(title, content, authorId);
    return blog;
  }
}
