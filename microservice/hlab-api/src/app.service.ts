import { Inject, Injectable } from '@nestjs/common';
import { Cache } from '@nestjs/cache-manager';
import { Public } from './decorators/public.decorator';

@Injectable()
export class AppService {
 
  getHello(): string {
    return 'Hello World!';
  }
}
