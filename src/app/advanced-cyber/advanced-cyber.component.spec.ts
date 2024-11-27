import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCyberComponent } from './advanced-cyber.component';

describe('AdvancedCyberComponent', () => {
  let component: AdvancedCyberComponent;
  let fixture: ComponentFixture<AdvancedCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedCyberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
