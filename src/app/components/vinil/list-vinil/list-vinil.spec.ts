import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVinil } from './list-vinil';

describe('ListVinil', () => {
  let component: ListVinil;
  let fixture: ComponentFixture<ListVinil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVinil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVinil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
