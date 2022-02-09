import { Controller, Sse, MessageEvent, Get } from '@nestjs/common';
import { interval, Observable, map } from 'rxjs';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Sse('bus-times-events')
  sse(): Observable<MessageEvent> {
    return interval(10000).pipe(map((_) => ({ data: this.apiService.getBusTimes() })));
  }

  @Get('/bus-times')
  getBusTimes() {
    return this.apiService.getBusTimes();
  }
}
