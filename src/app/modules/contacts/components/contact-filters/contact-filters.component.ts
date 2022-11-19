import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-filters',
  templateUrl: './contact-filters.component.html',
  styleUrls: ['./contact-filters.component.css'],
})
export class ContactFiltersComponent implements OnInit {
  filters: string[] = [];
  filterForm: FormGroup;

  @Output() onSearch = new EventEmitter<string[]>();
  constructor(private fb: FormBuilder) {
    this.filterForm = fb.group({ value: ['', Validators.required] });
  }

  ngOnInit(): void {}

  handleOnDelete(index: number) {
    this.filters.splice(index, 1);
  }
  handleOnCreate(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.filters.push(this.filterForm.value['value']);
      this.filterForm.reset();
    }
  }

  handleOnSearch() {
    this.onSearch.emit(this.filters);
  }
}
