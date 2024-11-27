import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAnalyticsComponent } from './image-analytics.component';

describe('ImageAnalyticsComponent', () => {
  let component: ImageAnalyticsComponent;
  let fixture: ComponentFixture<ImageAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
