import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrobiologyComponent } from './microbiology.component';

describe('MicrobiologyComponent', () => {
  let component: MicrobiologyComponent;
  let fixture: ComponentFixture<MicrobiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrobiologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrobiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
