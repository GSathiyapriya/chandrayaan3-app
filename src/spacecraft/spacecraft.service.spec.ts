import { Test, TestingModule } from '@nestjs/testing';
import { SpacecraftService } from './spacecraft.service';

describe('SpacecraftService', () => {
  let service: SpacecraftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpacecraftService],
    }).compile();

    service = module.get<SpacecraftService>(SpacecraftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should move forward correctly', () => {
    service.executeCommands(['f']);
    expect(service.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
  });

  it('should turn left correctly', () => {
    service.executeCommands(['l']);
    expect(service.getDirection()).toEqual('W');
  });

  it('should move backward correctly', () => {
    service.executeCommands(['b']);
    expect(service.getPosition()).toEqual({ x: 0, y: -1, z: 0 });
  });

  it('should turn right correctly', () => {
    service.executeCommands(['r']);
    expect(service.getDirection()).toEqual('E');
  });

  it('should turn up correctly', () => {
    service.executeCommands(['u']);
    expect(service.getDirection()).toEqual('Up');
  });

  it('should turn down correctly', () => {
    service.executeCommands(['d']);
    expect(service.getDirection()).toEqual('Down');
  });

  it('should execute multiple commands correctly', () => {
    service.executeCommands(['f', 'r', 'u', 'b', 'l']);
    expect(service.getPosition()).toEqual({ x: 0, y: 1, z: -1 });
    expect(service.getDirection()).toEqual('N');
  });
});