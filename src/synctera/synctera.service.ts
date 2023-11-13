import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration } from 'generated-baas-axios';

// used for sharing the config object with other services.
@Injectable()
export class SyncteraService {
  private readonly config: Configuration;
  constructor(private configService: ConfigService) {
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

  // First time using this syntax.
  get configObject() {
    return this.config;
  }
}
