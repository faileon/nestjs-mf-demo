import { Injectable } from '@nestjs/common';
import {test} from "./test";

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: `REMOTE ${test}` };
  }
}
