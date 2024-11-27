import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDataScienceComponent } from './advanced-data-science.component';

describe('AdvancedDataScienceComponent', () => {
  let component: AdvancedDataScienceComponent;
  let fixture: ComponentFixture<AdvancedDataScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedDataScienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
