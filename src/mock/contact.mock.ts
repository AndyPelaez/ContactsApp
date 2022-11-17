import { Contact } from 'src/app/models/contact.model';
import { randomId, randomPhoneNumber } from './utils.functions';

export const contact = new Contact({
  _id: randomId(),
  address: 'Washington, United States',
  email: 'derek@gmail.com',
  name: 'Derek Perez',
  phoneNumber: randomPhoneNumber(),
});
