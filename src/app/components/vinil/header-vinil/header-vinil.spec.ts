import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVinil } from './header-vinil';

describe('HeaderVinil', () => {
  let component: HeaderVinil;
  let fixture: ComponentFixture<HeaderVinil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderVinil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderVinil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
