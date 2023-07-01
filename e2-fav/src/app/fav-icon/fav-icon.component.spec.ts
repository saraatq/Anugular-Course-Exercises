import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavIconComponent } from './fav-icon.component';

describe('FavIconComponent', () => {
  let component: FavIconComponent;
  let fixture: ComponentFixture<FavIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavIconComponent]
    });
    fixture = TestBed.createComponent(FavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
