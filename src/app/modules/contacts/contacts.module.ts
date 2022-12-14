import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRowComponent } from './components/contact-row/contact-row.component';
import { ContactFiltersComponent } from './components/contact-filters/contact-filters.component';
import { FilterElementComponent } from './components/filter-element/filter-element.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactListComponent,
    ContactRowComponent,
    ContactFiltersComponent,
    FilterElementComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContactsModule { }
