import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD,APP_INTERCEPTOR } from '@nestjs/core';
import { ProductsModule } from './products/products.module';
import { AuthGuard } from './guards/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { ProductsTypeModule } from './products-type/products-type.module';
import { ProductsLangModule } from './products-lang/products-lang.module';
import { ProductsContentModule } from './products-content/products-content.module';


@Module({
  imports: [

    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      global: true,
      useFactory: () => ({
        secret: process.env.HLAB_JWT_SECRET,
        signOptions: {
          expiresIn: process.env.HLAB_JWT_EXPIRATION_TIME,
        },
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HLAB_POSTGRES_HOST,
      port: parseInt(<string>process.env.HLAB_POSTGRES_PORT),
      username: process.env.HLAB_POSTGRES_USER,
      password: process.env.HLAB_POSTGRES_PASSWORD,
      database: process.env.HLAB_POSTGRES_DATABASE,
      entities: ['dist/**/*.entity.js'],
      autoLoadEntities: true,
    }),
    ProductsModule,
    AuthModule,
    ProductsTypeModule,
    ProductsLangModule,
    ProductsContentModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService],
})
export class AppModule { }
