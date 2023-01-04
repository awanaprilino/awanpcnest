import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class LoginDto {

    @IsEmail({message: "Email is Required"})
    email: string;

    @MinLength(6,{message: "Password must be 6 characters."})
    @MaxLength(128,{message: "Password must be less than 128."})
    password: string;

    @IsNotEmpty({message: "Token Required."})
    token: string;
}