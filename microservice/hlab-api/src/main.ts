import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc'; // import UTC plugin
import * as timezone from 'dayjs/plugin/timezone'; // import timezone plugin

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
  config();

  // const swaggerServer = `http://localhost:${process.env.HLAB_PORT || 3000}`;
  if (process.env.NODE_ENV != 'productions') {
    // const configSW = new DocumentBuilder()
    //   .setTitle('hlab-service')
    //   .setDescription('ccdc-exchange-service API Documentation')
    //   .setVersion('1.0')
    //   .addServer(swaggerServer)
    //   .addBearerAuth()
    //   .build();

    // const document = SwaggerModule.createDocument(app,configSW);
    // SwaggerModule.setup('api',app,document);

    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Asia/Bangkok');
  }
  app.setGlobalPrefix('api/v1/');
  await app.listen(process.env.HLAB_PORT || 3000);
}
bootstrap();
