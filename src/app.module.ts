import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BaasClientModule } from './baas-client/baas-client.module';

@Module({
  imports: [ConfigModule.forRoot(), BaasClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
