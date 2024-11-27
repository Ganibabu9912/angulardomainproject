import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedWebComponent } from './advanced-web.component';

describe('AdvancedWebComponent', () => {
  let component: AdvancedWebComponent;
  let fixture: ComponentFixture<AdvancedWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
