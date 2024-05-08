import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UserInfoInterface } from 'src/info/interfaces';
import { UserInfoRequest } from 'src/info/models';
import { validate } from 'class-validator';
import { BaseResponse } from 'src/interfaces';
@Injectable()
export class UserFormService {
    async validateUserInfo(userInfoInterface: UserInfoInterface): Promise<BaseResponse>  {
        console.log('Validating user info by UserFormService.validateUserInfo, userInfo= ', userInfoInterface)
        if(userInfoInterface) {
            const data = plainToClass(UserInfoRequest, userInfoInterface);
            const validationErrors = await validate(data);
            if(validationErrors.length > 0) {
                throw new HttpException({
                    message: 'Validation failed',
                    errors: validationErrors,
                }, HttpStatus.BAD_REQUEST);
            }
            if(!this.validateUserAge(data.age, data.birthdate)) {
                throw new HttpException({
                    message: 'Your entered birthdate is not coherent with your entered age!',
                }, HttpStatus.BAD_REQUEST);
            }
            return {
                success: true,
                data
            };
        }
    }
    validateUserAge(age: number, birthdate: Date): boolean {
        console.log("validating user age by date...");
        const userAgeByDate = parseInt(new Date().getFullYear().toString()) - parseInt(new Date(birthdate).getFullYear().toString());
        return userAgeByDate === age;
    }
}
