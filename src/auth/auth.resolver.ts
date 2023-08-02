import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload } from './auth.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload, { name: 'signin' })
  async signIn(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<AuthPayload> {
    return this.authService.signIn(username, password);
  }
}
