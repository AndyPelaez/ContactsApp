import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ContactService } from 'src/app/services/contact.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { contact } from 'src/mock/contact.mock';
import { ContactServiceStub } from 'src/mock/contact.service.mock';
import { contacts } from 'src/mock/contacts.mock';
import { updateFormControls } from 'src/mock/utils.functions';

import { ContactRowComponent } from './contact-row.component';

describe('ContactRowComponent', () => {
  let component: ContactRowComponent;
  let fixture: ComponentFixture<ContactRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactRowComponent],
      imports: [ReactiveFormsModule, SharedModule],
      providers: [{ provide: ContactService, useValue: ContactServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactRowComponent);
    component = fixture.componentInstance;
    component.contact = { ...contacts[0] };
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form valid when have default data', () => {
    expect(component.contactForm.valid).toBeTruthy();
  });
  it('all form values are required', () => {
    const controls = component.contactForm.controls;

    //invalid values
    for (const key in controls) {
      controls[key].setValue('');
    }
    expect(component.contactForm.valid).toBeFalse();

    //valid values
    updateFormControls(contacts[0],controls)
    expect(component.contactForm.valid).toBeTrue();
  });
  it('email field validity', () => {
    const email = component.contactForm.controls['email'];
    email.setValue('bad@email');
    expect(email.valid).toBeFalsy();
    email.setValue('good@email.com');
    expect(email.valid).toBeTruthy();
  });
  it('phoneNumber field validity', () => {
    const phoneNumber = component.contactForm.controls['phoneNumber'];
    phoneNumber.setValue('string value');
    expect(phoneNumber.valid).toBeFalsy();
    phoneNumber.setValue('45446454');
    expect(phoneNumber.valid).toBeTruthy();
  });
  it('address field validity', () => {
    const address = component.contactForm.controls['address'];

    const stringLength101 = new Array(51).fill('a', 0, 51).toString();
    address.setValue(stringLength101);
    expect(address.valid).toBeFalsy();
    address.setValue('Florida, United States');
    expect(address.valid).toBeTruthy();
  });
  it('should show Edit text when not editing', () => {
    component.editing = false;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const buttons = componentDebug.queryAll(By.directive(ButtonComponent));
    const saveAndEditButton = buttons[0].componentInstance as ButtonComponent;
    expect(saveAndEditButton.text).toBe("Edit")
  });
  it('should show Save text when editing', () => {
    component.editing = true;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const buttons = componentDebug.queryAll(By.directive(ButtonComponent));
    const saveAndEditButton = buttons[0].componentInstance as ButtonComponent;
    expect(saveAndEditButton.text).toBe("Save")
  });
  it('should update contact after save', () => {
    const controls = component.contactForm.controls;
    component.editing = true;
    updateFormControls(contact, controls);
    component.handleOnSubmit()

    expect(component.contact.name).toEqual(contact.name)
    expect(component.contact.address).toEqual(contact.address)
    expect(component.contact.phoneNumber).toEqual(contact.phoneNumber)
    expect(component.contact.email).toEqual(contact.email)
  });
});
