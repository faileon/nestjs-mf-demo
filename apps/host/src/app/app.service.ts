import { Injectable } from '@nestjs/common';
// @ts-ignore
import * as remote from 'remote/Test';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log(remote);
    return { message: 'HOST' };
  }
}
