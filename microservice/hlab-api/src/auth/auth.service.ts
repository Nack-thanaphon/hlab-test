import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) { }

  async login(loginUserDto: {
    email: string;
    password: string
  }): Promise<{
    id: number;
    email: string;
    fullname: string;
    accessToken: string;
  }> {

    const user = {
      id: 1,
      email: 'hlab-test@mail.com',
      password: '$2a$10$g4IVLq0b1XJj.iPlDW0ma.Ll/Sp6c59Hgh90pDfTCMtHnkT7fAEvi',
      first_name: "ธนพล",
      last_name: "กัลปพฤกษ์"
    };

    if (user && (await bcrypt.compare(loginUserDto.password,user.password))) {
      const payload = { email: user.email,sub: 2 };

      return {
        id: user.id,
        email: user.email,
        fullname: user.first_name + ' ' + user.last_name,
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }


  async checkToken(token: string): Promise<any> {
    try {
      this.jwtService.verify(token);
      return {
        status: 200,
        message: 'Success',
      };
    } catch (error) {
      return {
        status: 404,
        data: [],
        message: 'Token has expired',
      };
    }
  }

}
