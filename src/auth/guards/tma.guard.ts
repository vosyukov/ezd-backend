import { CanActivate, createParamDecorator, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { validate, parse } from '@telegram-apps/init-data-node';
export type TmaPayloadData = {
  auth_date: string; // '2024-05-28T19:00:46.000Z'
  chat_type: string; // 'sender'
  chat_instance: string; // '8428209589180549439'
  hash: string; // '89d6079ad6762351f3...'
  start_param: string; // 'debug'
  signature: string; // '3uSQT_Xu4Z6bJoxKXgQ...'
  user: {
    allows_write_to_pm: boolean; // true
    first_name: string; // 'Andrew'
    id: number; // 99281932
    is_premium: boolean; // true
    last_name: string; // 'Rogue'
    language_code: string; // 'en'
    username: string; // 'rogue'
  };
};

export const TmaPayload = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<{ tmaPayload: TmaPayloadData }>();

  return request.tmaPayload;
});

@Injectable()
export class TmaGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      // Validate init data.

      // validate(token, '7803336542:AAEpWgu1fbyAq63or-gLAjNZNQOr5lMqA94', {
      //   // We consider init data sign valid for 1 hour from their creation moment.
      //   expiresIn: 3600,
      // });

      console.log(parse(token));
      // Parse init data. We will surely need it in the future.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      request['tmaPayload'] = parse(token);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  private extractTokenFromHeader(request: Request): string | null {
    const value = request.headers['authorization'] as string;

    if (value) {
      const [type, token] = value.split(' ');

      return type.toLowerCase() === 'tma' ? token : null;
    }

    return null;
  }
}
