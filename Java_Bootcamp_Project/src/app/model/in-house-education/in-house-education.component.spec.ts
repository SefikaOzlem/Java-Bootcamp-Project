import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHouseEducationComponent } from './in-house-education.component';

describe('InHouseEducationComponent', () => {
  let component: InHouseEducationComponent;
  let fixture: ComponentFixture<InHouseEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InHouseEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InHouseEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
