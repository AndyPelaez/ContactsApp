import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.name = 'myInput';
    component.label = 'My Input';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show input when editing', () => {
    component.editing = true;
    fixture.detectChanges();

    const componentDebug = fixture.debugElement;
    const inputDebug = componentDebug.query(By.css('input'));

    expect(inputDebug).not.toBeUndefined();
  });

  it('should show p text when not editing', () => {
    component.editing = false;
    fixture.detectChanges();

    const componentDebug = fixture.debugElement;
    const inputDebug = componentDebug.query(By.css('p'));

    expect(inputDebug).not.toBeUndefined();
  });

  it('should update the value by changing the text', () => {
    component.editing = true;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;

    const inputDebug = componentDebug.query(By.css('input'));

    const inputElement = inputDebug.nativeElement;

    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.value).toBe('test');
  });
});
