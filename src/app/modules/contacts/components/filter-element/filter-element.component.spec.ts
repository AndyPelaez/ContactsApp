import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilterElementComponent } from './filter-element.component';

describe('FilterElementComponent', () => {
  let component: FilterElementComponent;
  let fixture: ComponentFixture<FilterElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain the value text', () => {
    component.value = 'test';
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const pElement = componentDebug.query(By.css('p'));
    const pHtmlElement: HTMLElement = pElement.nativeElement;
    expect(pHtmlElement.innerText).toBe('test');
  });
  it('on Click on X button should emit onDelete event', () => {
    component.index = 10;
    component.value = 'test';

    component.onDelete.subscribe((res) => {
      expect(res).toBe(component.index);
    });

    const componentDebug = fixture.debugElement;
    const buttonElement = componentDebug.query(By.css('button'));
    const htmlButtonElement: HTMLButtonElement = buttonElement.nativeElement;
    htmlButtonElement.dispatchEvent(new Event('click'));
  });
});
