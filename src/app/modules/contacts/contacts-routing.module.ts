import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { path: 'contacts',
  component: ContactsComponent,
  children: [
      {
          path: 'list',
          component: ContactListComponent
      },
      {
          path: '**',
          redirectTo:'list'
      },
    ]},
    {
        path: '**',
        redirectTo:'contacts/list'
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
