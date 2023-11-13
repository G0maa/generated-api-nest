import { Module } from '@nestjs/common';
import { SyncteraConfigService } from './synctera/synctera.service';
import { SyncteraPersonsService } from './synctera/persons.service';
import { PersonsService } from './interfaces/persons.interface';
import { SharedConfig } from './interfaces/shared-config.interface';
import { ConfigModule } from '@nestjs/config';

// Can't use interfaces, they don't exist at runtime.
// abstract classes are ok, but we can't have propertie in them. (implements)
// abstact classe + extends, has inheritance.
@Module({
  imports: [ConfigModule],
  providers: [
    { provide: SharedConfig, useClass: SyncteraConfigService },
    { provide: PersonsService, useClass: SyncteraPersonsService },
  ],
  exports: [PersonsService],
})
export class BaasClientModule {}
