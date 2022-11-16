import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css'],
})
export class GenericListComponent implements OnInit {
  @Input() data!: any[];
  @Input() itemTemplate!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
