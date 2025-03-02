import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdealerComponent } from './registerdealer.component';

describe('RegisterdealerComponent', () => {
  let component: RegisterdealerComponent;
  let fixture: ComponentFixture<RegisterdealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterdealerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterdealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
