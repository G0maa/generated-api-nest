import { Module } from '@nestjs/common';
import { SyncteraService } from './synctera.service';
import { PersonsService } from './persons.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [SyncteraService, PersonsService],
  exports: [PersonsService],
})
export class SyncteraModule {}
