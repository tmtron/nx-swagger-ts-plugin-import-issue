import { Injectable } from '@nestjs/common';
import {MyDto} from "./my.dto";

@Injectable()
export class AppService {
  getData(): MyDto {
    const result = new MyDto();
    result.id = 'dto-1';
    result. count = 2;
    return result;
  }
}
