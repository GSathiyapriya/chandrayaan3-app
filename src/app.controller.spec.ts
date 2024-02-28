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

  it('should execute commands and return final position and direction', async () => {
    const commands = ['f', 'r', 'u', 'b', 'l'];
    jest.spyOn(spacecraftService, 'executeCommands').mockImplementation(() => {
      return;
    });
    jest.spyOn(spacecraftService, 'getPosition').mockReturnValue({ x: 0, y: 1, z: -1 });
    jest.spyOn(spacecraftService, 'getDirection').mockReturnValue('N');

    const result = await appController.executeCommands(commands);
    
    expect(spacecraftService.executeCommands).toHaveBeenCalledWith(commands);
    expect(spacecraftService.getPosition).toHaveBeenCalled();
    expect(spacecraftService.getDirection).toHaveBeenCalled();
    expect(result).toEqual({
      finalPosition: { x: 0, y: 1, z: -1 },
      finalDirection: 'N',
    });
  });
});
