import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactValidator } from 'src/app/validators/contact.validator';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css'],
})
export class ContactRowComponent implements OnInit {
  @Input() contact!: Contact;

  contactForm!: FormGroup;
  editing: boolean = false;

  constructor(private fb: FormBuilder) {}

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
      //TODO:Implement form sumbit
      if (this.contactForm.valid) this.editing = false;
    }
  }
}
