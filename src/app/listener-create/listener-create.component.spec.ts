import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerCreateComponent } from './listener-create.component';

describe('ListenerCreateComponent', () => {
  let component: ListenerCreateComponent;
  let fixture: ComponentFixture<ListenerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
