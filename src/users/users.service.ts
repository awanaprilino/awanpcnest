import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/dashboard/dto/register.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  async register(registerDto: RegisterDto) {
    const user = User.create(registerDto);
    await user.save();

    delete user.password;
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);

    delete user.password;
    return user;
  }

  async findById(id: number) {
    return await User.findOneBy({id: id});
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }
}