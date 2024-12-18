import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticComponent } from './genetic.component';

describe('GeneticComponent', () => {
  let component: GeneticComponent;
  let fixture: ComponentFixture<GeneticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
