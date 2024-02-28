import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SpacecraftService } from './spacecraft/spacecraft.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly spacecraftService: SpacecraftService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/execute-command')
  executeCommands(@Body() body: any) {
    const { commands } = body;
    this.spacecraftService.executeCommands(commands);
    const position = this.spacecraftService.getPosition();
    const direction = this.spacecraftService.getDirection();
    return {
      finalPosition: position,
      finalDirection: direction,
    };
  }
}
