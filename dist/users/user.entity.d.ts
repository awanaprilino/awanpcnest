import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    name: string;
    privilege: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    hashPassword(): Promise<void>;
    validatePassword(password: string): Promise<boolean>;
}
