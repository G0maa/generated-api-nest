import { Injectable } from '@nestjs/common';
import { PersonsService } from './synctera/persons.service';

@Injectable()
export class AppService {
  constructor(private personsSerivce: PersonsService) {}

  async getHello() {
    return this.personsSerivce.createPerson({
      first_name: 'Jerri',
      last_name: 'Hogarth',
      legal_address: {
        address_line_1: '12620 PADDINGTON AVE',
        city: 'New York',
        state: 'NY',
        postal_code: '10001',
        country_code: 'US',
      },
      dob: '1976-08-09',
      ssn: '555-55-1111',
      email: 'hogarthandassoc@example.com',
      phone_number: '+12125554549',
      is_customer: true,
      status: 'ACTIVE',
    });
  }
}
