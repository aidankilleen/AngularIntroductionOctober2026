import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomPipePage } from './custom-pipe-page';

describe('CustomPipePage', () => {
  let component: CustomPipePage;
  let fixture: ComponentFixture<CustomPipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipePage],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomPipePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
