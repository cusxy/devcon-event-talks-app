import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalksModule } from './talks/talks.module';

@Module({
  imports: [TalksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
