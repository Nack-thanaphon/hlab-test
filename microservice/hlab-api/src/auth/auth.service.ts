import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto,User } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async login(loginUserDto: LoginUserDto): Promise<{
    id: number;
    email: string;
    fullname: string;
    role: string;
    permission: any
    accessToken: string;
  }> {
    const user = await this.userService.findByEmail(loginUserDto.email);

    if (user && (await bcrypt.compare(loginUserDto.password,user.password))) {
      const payload = { email: user.email,sub: 2 };
      const permission = JSON.parse(user.permission);
      const permissionId = Array.isArray(permission) ? permission.sort((a,b) => a - b) : [];

      return {
        id: user.id,
        email: user.email,
        fullname: user.first_name + ' ' + user.last_name,
        role: user.role_name.name,
        permission: permissionId[0],
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
