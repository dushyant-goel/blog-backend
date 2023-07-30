// import { Resolver, Query, Mutation, Args, Field } from '@nestjs/graphql';
// import { Blog } from './blog.entity';
// import { BlogService } from './blog.service';

// @Resolver(() => Blog)
// export class BlogResolver {
//   constructor(private readonly blogService: BlogService) {}

//   @Query(() => [Blog])
//   async blogs() {
//     return this.blogService.findAll();
//   }

//   @Mutation(() => Blog)
//   @Field()
//   async createBlog(
//     @Args('title') title: string,
//     @Args('content') content: string,
//     @Args('authorId') authorId: number,
//   ): Promise<Blog> {
//     const blog = await this.blogService.create(title, content, authorId);
//     return blog;
//   }
// }
