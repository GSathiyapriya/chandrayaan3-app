import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpacecraftService } from './spacecraft/spacecraft.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SpacecraftService],
})
export class AppModule {}
