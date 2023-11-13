import { Injectable } from '@nestjs/common';
import { Configuration, PersonsApi, PostPerson } from 'generated-baas-axios';
import { PersonsService } from '../interfaces/persons.interface';
import { SharedConfig } from '../interfaces/shared-config.interface';

@Injectable()
export class SyncteraPersonsService extends PersonsService {
  protected personsApi: PersonsApi;
  constructor(private readonly syncteraService: SharedConfig) {
    super();
    this.personsApi = new PersonsApi(
      syncteraService.configObject as Configuration,
    );
  }

  async createPerson(person: PostPerson) {
    // also has idempotencyKey & options object
    const res = await this.personsApi.createPerson(person);

    return res.data;
  }
}
