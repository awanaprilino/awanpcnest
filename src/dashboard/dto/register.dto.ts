import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';
import { Match } from './match.decorator';

export class RegisterDto {
    @IsEmail({message: "Email is Required"})
    email: string;

    @IsNotEmpty({message: "Name is Required"})
    name: string;

    readonly privilege = '2';

    @MinLength(6,{message: "Password must be 6 characters."})
    @MaxLength(20,{message: "Password must be less than 20."})
    password: string;

    @Match('password', {message: "Password confirmation invalid"})
    password_confirmation: string;

    @IsNotEmpty({message: "Token is Required."})
    token: string;
}