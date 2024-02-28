import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpacecraftService } from './spacecraft/spacecraft.service';

describe('AppController', () => {
  let appController: AppController;
  let spacecraftService: SpacecraftService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, SpacecraftService],
    }).compile();

    appController = app.get<AppController>(AppController);
    spacecraftService = app.get<SpacecraftService>(SpacecraftService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  it('should execute commands and return final position and direction', () => {
    const executeCommandsSpy = jest.spyOn(spacecraftService, 'executeCommands');

    appController.executeCommands();

    expect(executeCommandsSpy).toHaveBeenCalledWith(['f', 'r', 'u', 'b', 'l']);
    expect(spacecraftService.getPosition()).toEqual({ x: 0, y: 1, z: -1 });
    expect(spacecraftService.getDirection()).toEqual('N');
  });
});
