import { Contact } from 'src/app/models/contact.model';
import { randomId, randomPhoneNumber } from './utils.functions';

export const contacts: Contact[] = [
  new Contact({
    _id: randomId(),
    address: 'Florida, United States',
    email: 'pepe@gmail.com',
    name: 'Pepe Perez',
    phoneNumber: randomPhoneNumber(),
  }),
  new Contact({
    _id: randomId(),
    address: 'Florida, United States',
    email: 'pedro@gmail.com',
    name: 'Pedro Fernandez',
    phoneNumber: randomPhoneNumber(),
  }),
  new Contact({
    _id: randomId(),
    address: 'Florida, United States',
    email: 'Julia@gmail.com',
    name: 'Julia Lopez',
    phoneNumber: randomPhoneNumber(),
  }),
  new Contact({
    _id: randomId(),
    address: 'Florida, United States',
    email: 'sandra@gmail.com',
    name: 'Sandra Castillo',
    phoneNumber: randomPhoneNumber(),
  }),
  new Contact({
    _id: randomId(),
    address: 'Florida, United States',
    email: 'Laura@gmail.com',
    name: 'Laura Perez',
    phoneNumber: randomPhoneNumber(),
  }),
  new Contact({
    _id: randomId(),
    address: 'Florida, United States',
    email: 'ernesto@gmail.com',
    name: 'Ernesto Fonseca',
    phoneNumber: randomPhoneNumber(),
  }),
  new Contact({
    _id: randomId(),
    address: 'Florida, United States',
    email: 'liliana@gmail.com',
    name: 'Liliana Horta',
    phoneNumber: randomPhoneNumber(),
  })
];
