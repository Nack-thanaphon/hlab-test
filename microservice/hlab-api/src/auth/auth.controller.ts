import { Controller,Post,Body,Get,Req,UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }


    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<{
        email: string;
        fullname: string;
        accessToken: string;
    }> {
        return this.authService.login(loginUserDto);
    }

    //   @Post('refresh-token')
    //   async refreshToken(@Body('token') oldToken: string): Promise<{
    //     accessToken: string;
    //   }> {
    //     return this.authService.refreshToken(oldToken);
    //   }

    @Post('checkToken')
    async checkToken(
        @Body('token') oldToken: string
    ): Promise<any> {
        return this.authService.checkToken(oldToken);
    }

}
