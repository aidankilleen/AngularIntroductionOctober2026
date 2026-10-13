import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicNavigation } from './dynamic-navigation';

describe('DynamicNavigation', () => {
  let component: DynamicNavigation;
  let fixture: ComponentFixture<DynamicNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
