import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertismentComponent } from './add-advertisment.component';

describe('AddAdvertismentComponent', () => {
  let component: AddAdvertismentComponent;
  let fixture: ComponentFixture<AddAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAdvertismentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
