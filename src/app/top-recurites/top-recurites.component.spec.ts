import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRecuritesComponent } from './top-recurites.component';

describe('TopRecuritesComponent', () => {
  let component: TopRecuritesComponent;
  let fixture: ComponentFixture<TopRecuritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRecuritesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRecuritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
