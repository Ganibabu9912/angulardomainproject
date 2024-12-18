import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlatformComponent } from './about-platform.component';

describe('AboutPlatformComponent', () => {
  let component: AboutPlatformComponent;
  let fixture: ComponentFixture<AboutPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
