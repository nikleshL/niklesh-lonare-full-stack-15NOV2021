import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteDashboardComponent } from './favourite-dashboard.component';

describe('FavouriteDashboardComponent', () => {
  let component: FavouriteDashboardComponent;
  let fixture: ComponentFixture<FavouriteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
