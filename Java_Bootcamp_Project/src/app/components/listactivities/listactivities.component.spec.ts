import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactivitiesComponent } from './listactivities.component';

describe('ListactivitiesComponent', () => {
  let component: ListactivitiesComponent;
  let fixture: ComponentFixture<ListactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
