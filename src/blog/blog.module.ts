import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogResolver } from './blog.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  providers: [BlogService, BlogResolver],
  controllers: [BlogController],
  exports: [BlogService],
})
export class BlogModule {}
