import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningImageAnalyticsComponent } from './deep-learning-image-analytics.component';

describe('DeepLearningImageAnalyticsComponent', () => {
  let component: DeepLearningImageAnalyticsComponent;
  let fixture: ComponentFixture<DeepLearningImageAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepLearningImageAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepLearningImageAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
