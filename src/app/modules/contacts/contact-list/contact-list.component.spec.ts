import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ContactService } from 'src/app/services/contact.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactServiceStub } from 'src/mock/contact.service.mock';
import { contacts } from 'src/mock/contacts.mock';
import { ContactRowComponent } from '../components/contact-row/contact-row.component';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactListComponent, ContactRowComponent],
      imports:[SharedModule,ReactiveFormsModule],
      providers: [{ provide: ContactService, useValue: ContactServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update contacts after ngOnInit', () => {
    component.ngOnInit();
    expect(component.contacts).toEqual(contacts);
  });
  it('should render "contact.length" row elements', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const rowElements = componentDebug.queryAll(By.css('app-contact-row'))
    expect(rowElements.length).toEqual(contacts.length);
  });
  it('should remove an element on Update', () => {
    component.ngOnInit();
    component.handleOnDelete(contacts[0])
    contacts.shift();
    expect(component.contacts).toEqual(contacts);
  });
});
