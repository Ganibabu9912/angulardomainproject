import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDefenseComponent } from './network-defense.component';

describe('NetworkDefenseComponent', () => {
  let component: NetworkDefenseComponent;
  let fixture: ComponentFixture<NetworkDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkDefenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
