import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpaComponent } from './mlpa.component';

describe('MlpaComponent', () => {
  let component: MlpaComponent;
  let fixture: ComponentFixture<MlpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
