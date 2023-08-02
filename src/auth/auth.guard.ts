import {
  CanActivate,
  Injectable,
  UnauthorizedException,
  ExecutionContext,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('making progress');
    const gqlContext: GqlExecutionContext = GqlExecutionContext.create(context);

    const { req: request } = gqlContext.getContext();

    const token = this.extractTokenFromHeader(request);
    console.log(token);

    const { authorId } = gqlContext.getArgs();

    if (!token) {
      throw new UnauthorizedException();
    }

    const payload = await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    });

    return authorId === payload.sub;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
