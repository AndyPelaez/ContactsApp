import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-element',
  templateUrl: './filter-element.component.html',
  styleUrls: ['./filter-element.component.css'],
})
export class FilterElementComponent implements OnInit {
  @Input()
  value: string = '';
  @Input()
  index: number = 0;

  @Output() onDelete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  handleOnDelete() {
    this.onDelete.emit(this.index);
  }
}
