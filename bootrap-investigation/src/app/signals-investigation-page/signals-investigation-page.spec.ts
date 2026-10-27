import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsInvestigationPage } from './signals-investigation-page';

describe('SignalsInvestigationPage', () => {
  let component: SignalsInvestigationPage;
  let fixture: ComponentFixture<SignalsInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
