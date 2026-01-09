import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShows } from './header-shows';

describe('HeaderShows', () => {
  let component: HeaderShows;
  let fixture: ComponentFixture<HeaderShows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderShows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderShows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
