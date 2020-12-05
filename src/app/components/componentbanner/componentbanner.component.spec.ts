import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentcolombiaComponent } from './componentcolombia.component';

describe('ComponentcolombiaComponent', () => {
  let component: ComponentcolombiaComponent;
  let fixture: ComponentFixture<ComponentcolombiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentcolombiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentcolombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
