import { Injectable } from '@nestjs/common';

@Injectable()
export class SpacecraftService {
  private position: { x: number; y: number; z: number };
  private direction: 'N' | 'S' | 'E' | 'W' | 'Up' | 'Down';

  constructor() {
    this.position = { x: 0, y: 0, z: 0 };
    this.direction = 'N';
  }

  executeCommands(commands: string[]) {
    for (const command of commands) {
      this.commandExecution(command);
    }
  }

  private commandExecution(command: string) {
    switch (command) {
      case 'f':
        this.moveForward();
        break;
      case 'b':
        this.moveBackward();
        break;
      case 'l':
        this.turnLeft();
        break;
      case 'r':
        this.turnRight();
        break;
      case 'u':
        this.turnUp();
        break;
      case 'd':
        this.turnDown();
        break;
      default:
        break;
    }
  }

  private moveForward() {
    switch (this.direction) {
      case 'N':
        this.position.y++;
        break;
      case 'S':
        this.position.y--;
        break;
      case 'E':
        this.position.x++;
        break;
      case 'W':
        this.position.x--;
        break;
      case 'Up':
        this.position.z++;
        break;
      case 'Down':
        this.position.z--;
        break;
    }
  }

  private moveBackward() {
  switch (this.direction) {
    case 'N':
      this.position.y--;
      break;
    case 'S':
      this.position.y++;
      break;
    case 'E':
      this.position.x--;
      break;
    case 'W':
      this.position.x++;
      break;
    case 'Up':
      this.position.z--;
      break;
    case 'Down':
      this.position.z++;
      break;
  }
}

private turnLeft() {
    switch (this.direction) {
      case 'N':
        this.direction = 'W';
        break;
      case 'S':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'N';
        break;
      case 'W':
        this.direction = 'S';
        break;
      case 'Up':
        this.direction = 'N';
        break;
      case 'Down':
        this.direction = 'S';
        break;
    }
  }
  
  private turnRight() {
    switch (this.direction) {
      case 'N':
        this.direction = 'E';
        break;
      case 'S':
        this.direction = 'W';
        break;
      case 'E':
        this.direction = 'S';
        break;
      case 'W':
        this.direction = 'N';
        break;
      case 'Up':
        this.direction = 'E';
        break;
      case 'Down':
        this.direction = 'W';
        break;
    }
  }

  private turnUp() {
    if (this.direction === 'N' || this.direction === 'E') {
      this.direction = 'Up';
    }
  }

  private turnDown() {
    if (this.direction === 'N' || this.direction === 'E') {
      this.direction = 'Down';
    }
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }
}