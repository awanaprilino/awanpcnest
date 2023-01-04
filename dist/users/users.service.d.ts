import { RegisterDto } from 'src/dashboard/dto/register.dto';
import { User } from './user.entity';
export declare class UsersService {
    register(registerDto: RegisterDto): Promise<User>;
    showById(id: number): Promise<User>;
    findById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
}
