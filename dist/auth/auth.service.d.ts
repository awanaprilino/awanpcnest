import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, password: string): Promise<any>;
}
