import { Controller, Post, Body } from '@nestjs/common';
import { UserInfoInterface } from 'src/user-form/interfaces';
import { UserFormService } from './user-form.service';
import { BaseResponse } from 'src/interfaces';
@Controller('user-form')
export class UserFormController {
    constructor(private readonly userFormService: UserFormService) {}
    @Post('validate')
    validateUserForm(@Body() userInfoInterface: UserInfoInterface) : Promise<BaseResponse>{
        console.log('UserFormController got the post request...')
        return this.userFormService.validateUserInfo(userInfoInterface)
    } 
}
