import { Injectable } from '@nestjs/common';

// Doesn't extend, yet nestjs would accept anyway.
@Injectable()
export class TreasuryPriePersonsService {
  async createPerson() {
    return { hi: 'there' };
  }
}
