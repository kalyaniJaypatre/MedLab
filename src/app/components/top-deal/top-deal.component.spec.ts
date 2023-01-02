import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealComponent } from './top-deal.component';

describe('TopDealComponent', () => {
  let component: TopDealComponent;
  let fixture: ComponentFixture<TopDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
