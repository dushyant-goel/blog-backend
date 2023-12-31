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

  async findAllWithBlogs(): Promise<User[]> {
    return this.userRepository.find({ relations: ['blogs'] });
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findOneWithBlogs(id: number): Promise<User> {
    console.log(`User Service: ${id}`);
    return this.userRepository.findOne({
      relations: ['blogs'],
      where: { id: id },
    });
  }

  async findByUsername(username: string): Promise<User> {
    console.log(username);
    return this.userRepository.findOneBy({
      username,
    });
  }

  async findByUsernameWithBlogs(username: string): Promise<User> {
    console.log(username);
    return this.userRepository.findOne({
      where: { username: username },
      relations: ['blogs'],
    });
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
