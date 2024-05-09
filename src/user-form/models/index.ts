import { UserInfoInterface } from '../interfaces';
import { IsBoolean, ValidateIf, IsNotEmpty, IsNumber, IsString, 
  Max, MaxLength, Min, MinLength, IsDateString } from 'class-validator';

export class UserInfoRequest implements UserInfoInterface {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    name: string;
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(150)
    age: number;
    @IsNotEmpty()
    @IsDateString()
    birthdate: Date;
    @ValidateIf(o => o.married !== undefined)
    @IsBoolean()
    married: boolean;
  }