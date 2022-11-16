import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'email' = 'text';
  @Input() name!: string;
  @Input() label!: string;
  @Input() disabled: boolean = false;
  @Input() editing: boolean = false;

  value: string = '';

  onChange: Function = (value: string) => {};
  onTouched: Function = (value: string) => {};

  changeValue(value: string) {
    if (value) {
      this.onChange(value);
      this.writeValue(value)
    }
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log('**');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}
