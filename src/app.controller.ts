import { Controller, Get } from '@nestjs/common';
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

  @Get('spacecraft')
  executeCommands() {
    const commands = ['f', 'r', 'u', 'b', 'l'];
    this.spacecraftService.executeCommands(commands);
    const position = this.spacecraftService.getPosition();
    const direction = this.spacecraftService.getDirection();
    return {
      finalPosition: position,
      finalDirection: direction,
    };
  }
}
