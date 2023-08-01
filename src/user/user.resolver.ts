import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => [User], { name: 'usersWithBlogs' })
  async getAllUserWithBlogs(): Promise<User[]> {
    return this.userService.findAllWithBlogs();
  }

  @Query(() => User, { name: 'getUser' })
  async getUser(@Args('id') id: number): Promise<User> {
    return this.userService.findOneWithBlogs(id);
  }

  @Query(() => User, { name: 'getUserByUsername' })
  async getUserByUsername(@Args('username') username: string): Promise<User> {
    return this.userService.findByUsernameWithBlogs(username);
  }

  @Mutation(() => User)
  async createUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<User> {
    const user = await this.userService.create(username, password);
    return user;
  }
}
