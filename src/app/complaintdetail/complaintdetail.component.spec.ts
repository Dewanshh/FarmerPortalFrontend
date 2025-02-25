import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintdetailComponent } from './complaintdetail.component';

describe('ComplaintdetailComponent', () => {
  let component: ComplaintdetailComponent;
  let fixture: ComponentFixture<ComplaintdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
