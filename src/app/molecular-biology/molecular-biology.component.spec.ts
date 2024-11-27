import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecularBiologyComponent } from './molecular-biology.component';

describe('MolecularBiologyComponent', () => {
  let component: MolecularBiologyComponent;
  let fixture: ComponentFixture<MolecularBiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MolecularBiologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolecularBiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
