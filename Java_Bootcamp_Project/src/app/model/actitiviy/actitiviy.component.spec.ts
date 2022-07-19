import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActitiviyComponent } from './actitiviy.component';

describe('ActitiviyComponent', () => {
  let component: ActitiviyComponent;
  let fixture: ComponentFixture<ActitiviyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActitiviyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActitiviyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
