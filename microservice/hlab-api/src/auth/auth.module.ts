// import { forwardRef, Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { UsersModule } from 'src/users/users.module';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from 'src/strategies/jwt.strategy';

// @Module({
//   imports: [
//     forwardRef(() => UsersModule),
//     JwtModule.register({
//       secret: process.env.JWT_SECRET, 
//       signOptions: { expiresIn: '24hr' },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, JwtStrategy],
//   exports: [AuthService],
// })
// export class AuthModule {}
