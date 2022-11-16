import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ContactValidator } from 'src/app/validators/contact.validator';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css'],
})
export class ContactRowComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() onDelete = new EventEmitter<Contact>();

  contactForm!: FormGroup;
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [this.contact.name, Validators.required],
      email: [
        this.contact.email,
        [Validators.required, ContactValidator.emailValidator],
      ],
      address: [
        this.contact.address,
        [Validators.required, ContactValidator.addressValidator],
      ],
      phoneNumber: [
        this.contact.phoneNumber,
        [Validators.required, ContactValidator.phoneNumberValidator],
      ],
    });
  }

  editHandle() {
    if (!this.editing) this.editing = true;
    else {
      this.handleOnSubmit();
    }
  }

  handleOnSubmit() {
    if (!this.contactForm.valid) return;
    Object.assign(this.contact, this.contactForm.value);
    this.contactService
      .updateItem(this.contact._id, this.contact)
      .subscribe(() => {
        this.editing = false;
      });
  }

  handleOnRemove() {
    const response = confirm('Are you sure?');
    if (response) this.remove();
  }

  remove() {
    this.contactService.removeItem(this.contact._id).subscribe(() => {
      this.onDelete.emit(this.contact);
    });
  }
}
