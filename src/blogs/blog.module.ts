import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { BlogController } from './blog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  providers: [BlogService, BlogResolver],
  controllers: [BlogController],
})
export class BlogModule {}
