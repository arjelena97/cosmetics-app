import { Controller, Get } from '@nestjs/common';
import { AdministratorService } from '../services/administrator/administrator.service';
import { Administrator } from 'entities/administrator.entity';

@Controller()
export class AppController {
  constructor(
    private administratorService: AdministratorService
  ){}

 @Get() // http://localhost:3000/
 getHello(): string {
   return 'Hello World!';
 }
 

}
