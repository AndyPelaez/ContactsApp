import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getItems().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  handleOnDelete(contact: Contact) {
    const index = this.contacts.findIndex((c) => c._id === contact._id);
    this.contacts.splice(index, 1);
  }
}
