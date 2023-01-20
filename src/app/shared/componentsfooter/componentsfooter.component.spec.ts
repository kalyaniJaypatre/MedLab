import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsfooterComponent } from './componentsfooter.component';

describe('ComponentsfooterComponent', () => {
  let component: ComponentsfooterComponent;
  let fixture: ComponentFixture<ComponentsfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
