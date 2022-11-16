import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { GenericListComponent } from './generic-list/generic-list.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    GenericListComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputComponent,
    ButtonComponent,
    GenericListComponent
  ],
})
export class SharedModule {}
