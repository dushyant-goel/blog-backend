import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(username: string): Promise<User> {
    console.log(username);
    return this.userRepository.findOneBy({ username });
  }

  async create(username: string, password: string): Promise<User> {
    const user = this.userRepository.create({
      username,
      password,
    });
    console.log('Created User:', user);
    return this.userRepository.save(user);
  }
}
