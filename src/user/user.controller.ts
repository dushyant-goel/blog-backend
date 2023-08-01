import { Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(username: string, password: string): Promise<User> {
    return this.userService.create(username, password);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getOneUser(@Param() params: any): Promise<User> {
    return this.userService.findOne(params.id);
  }
}
