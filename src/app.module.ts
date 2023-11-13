import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SyncteraModule } from './synctera/synctera.module';

@Module({
  imports: [ConfigModule.forRoot(), SyncteraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
