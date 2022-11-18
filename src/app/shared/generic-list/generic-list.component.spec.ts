import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GenericListComponent } from './generic-list.component';

describe('GenericListComponent', () => {
  let component: GenericListComponent;
  let fixture: ComponentFixture<GenericListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show "no data" text when data is empty', () => {
    component.data = [];
    fixture.detectChanges();
    const elementDebug = fixture.debugElement;
    const p = elementDebug.query(By.css('p'))
    const htmlPElement: HTMLElement = p.nativeElement;
    expect(htmlPElement.innerText).toBe('No Data!')
  });
});
