import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionplansComponent } from './subcriptionplans.component';

describe('SubcriptionplansComponent', () => {
  let component: SubcriptionplansComponent;
  let fixture: ComponentFixture<SubcriptionplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcriptionplansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriptionplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
