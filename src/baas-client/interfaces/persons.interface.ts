// Umma's custom types should be used here instead of any.
export abstract class PersonsService {
  protected abstract personsApi: any;

  abstract createPerson(person: any): any;
}
