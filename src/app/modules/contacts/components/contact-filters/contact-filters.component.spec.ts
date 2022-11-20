import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactFiltersComponent } from './contact-filters.component';

describe('ContactFiltersComponent', () => {
  let component: ContactFiltersComponent;
  let fixture: ComponentFixture<ContactFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFiltersComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('filter value test validity', () => {
    const value = component.filterForm.controls['value'];
    value.setValue('');
    expect(value.valid).toBeFalsy();
    value.setValue('filterTest');
    expect(value.valid).toBeTruthy();
  });
  it('the filter should be added when press enter and there is a valid value', () => {
    const value = component.filterForm.controls['value'];
    value.setValue('test');
    const componentDebug = fixture.debugElement;
    const inputDebug = componentDebug.query(By.css('input'));
    const inputElement = inputDebug.nativeElement;
    const enterEvent = new KeyboardEvent('keypress', {
      code: 'Enter',
    });
    inputElement.dispatchEvent(enterEvent);
    expect(component.filters).toContain('test');
  });
  it('the filter should not be added when press enter and there is an invalid value', () => {
    const value = component.filterForm.controls['value'];
    value.setValue('');
    const componentDebug = fixture.debugElement;
    const inputDebug = componentDebug.query(By.css('input'));
    const inputElement = inputDebug.nativeElement;
    const enterEvent = new KeyboardEvent('keypress', {
      code: 'Enter',
    });
    inputElement.dispatchEvent(enterEvent);
    expect(component.filters).not.toContain('test');
  });
});
