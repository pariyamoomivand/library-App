import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaceCrudComponent } from './bace-crud-component';

describe('BaceCrudComponent', () => {
  let component: BaceCrudComponent;
  let fixture: ComponentFixture<BaceCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaceCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaceCrudComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
