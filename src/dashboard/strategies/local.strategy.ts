import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }
  async validate(email: string, password: string): Promise<any> {
    const userMail = email.toLowerCase();
    const user = await this.authService.validateUser(userMail, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}