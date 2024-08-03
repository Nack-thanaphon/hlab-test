import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('login')
    async login(@Body() loginUserDto: {
        email: string;
        password: string;
    }): Promise<{
        status: number;
        email: string;
        fullname: string;
        accessToken: string;
    }> {
        try {
            const resp = await this.authService.login(loginUserDto);
            if (resp) {
                return {
                    status: 200,
                    email: resp.email,
                    fullname: resp.fullname,
                    accessToken: resp.accessToken
                }
            }

        } catch (error) {
            return {
                status: 404,
                email: '',
                fullname: '',
                accessToken: ''
            }
        }
    }
}

