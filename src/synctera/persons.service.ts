import { Injectable } from '@nestjs/common';
import { PersonsApi, PostPerson } from 'generated-baas-axios';
import { SyncteraService } from './synctera.service';

@Injectable()
export class PersonsService {
  private personsApi: PersonsApi;
  constructor(private readonly syncteraService: SyncteraService) {
    this.personsApi = new PersonsApi(syncteraService.configObject);
  }

  async createPerson(person: PostPerson) {
    // also has idempotencyKey & options object
    const res = await this.personsApi.createPerson(person);

    return res.data;
  }
}
