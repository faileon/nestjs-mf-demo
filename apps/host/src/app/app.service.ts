import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getData() {
    import('remote/Test' as any).then(container => {
      console.log("CONTAINER", container.default());
    })
    return { message: 'HOST' };
  }
}
