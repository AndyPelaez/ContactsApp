import { IContact } from '../interfaces/contact.interface';

export class Contact {
  _id: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;

  constructor(contact: IContact) {
    const { _id, name, address, phoneNumber, email } = contact;
    this._id = _id;
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
