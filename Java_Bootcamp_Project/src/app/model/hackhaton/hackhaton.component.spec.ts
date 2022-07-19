import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackhatonComponent } from './hackhaton.component';

describe('HackhatonComponent', () => {
  let component: HackhatonComponent;
  let fixture: ComponentFixture<HackhatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackhatonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackhatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
