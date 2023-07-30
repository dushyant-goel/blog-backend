import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/blog.entity';
import { User } from './user/user.entity';

@Module({
  imports: [
    UserModule,
    BlogModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.db',
      entities: [Blog, User],
      synchronize: true,
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   context: ({ req }) => ({ req }),
    //   driver: ApolloDriver,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
