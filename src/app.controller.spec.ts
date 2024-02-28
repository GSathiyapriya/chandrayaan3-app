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
});
