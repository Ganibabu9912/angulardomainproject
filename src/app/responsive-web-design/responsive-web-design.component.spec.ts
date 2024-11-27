import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWebDesignComponent } from './responsive-web-design.component';

describe('ResponsiveWebDesignComponent', () => {
  let component: ResponsiveWebDesignComponent;
  let fixture: ComponentFixture<ResponsiveWebDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveWebDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveWebDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
