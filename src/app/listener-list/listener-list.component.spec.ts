import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerListComponent } from './listener-list.component';

describe('ListenerListComponent', () => {
  let component: ListenerListComponent;
  let fixture: ComponentFixture<ListenerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
