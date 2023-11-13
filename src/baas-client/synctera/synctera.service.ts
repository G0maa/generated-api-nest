import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration } from 'generated-baas-axios';
import { SharedConfig } from '../interfaces/shared-config.interface';

// used for sharing the config object with other services.
@Injectable()
export class SyncteraConfigService extends SharedConfig {
  protected config: Configuration;

  constructor(private configService: ConfigService) {
    super();
    this.config = new Configuration({
      basePath: configService.get<string>('SYNCTERA_BASE_PATH'),
      baseOptions: {
        headers: {
          authorization: `Bearer ${configService.get<string>(
            'SYNCTERA_API_KEY',
          )}`,
        },
      },
    });
  }

  get configObject(): Configuration {
    return this.config;
  }
}
