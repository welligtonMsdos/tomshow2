import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vinil } from './vinil';

describe('Vinil', () => {
  let component: Vinil;
  let fixture: ComponentFixture<Vinil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vinil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vinil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
