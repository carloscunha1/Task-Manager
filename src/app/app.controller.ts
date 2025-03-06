import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { create } from 'domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/teste")
  getTeste() {
    return 'Rota de Teste da API!'
  }
  @Post("/teste") 
    createTest(){
      return 'Rota POST FUNCIONANDO'
  }

  
}
