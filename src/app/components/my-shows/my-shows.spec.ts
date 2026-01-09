import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShows } from './my-shows';

describe('MyShows', () => {
  let component: MyShows;
  let fixture: ComponentFixture<MyShows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyShows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyShows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
