import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteData } from './delete-data';

describe('DeleteData', () => {
  let component: DeleteData;
  let fixture: ComponentFixture<DeleteData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
