import { HttpException, HttpStatus, Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
        throw new HttpException({
            message: ["Couldn't find your Awanpc Account"]
          }, HttpStatus.UNAUTHORIZED);
      }
    const passwordValid = await bcrypt.compare(password, user.password)
    if (user && passwordValid) {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        privilege: user.privilege
      };
    }
    throw new HttpException({
        message: ["Wrong password. Please try again or contact admin"]
      }, HttpStatus.UNAUTHORIZED);
  }
}