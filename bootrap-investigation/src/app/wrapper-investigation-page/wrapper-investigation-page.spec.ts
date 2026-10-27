import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrapperInvestigationPage } from './wrapper-investigation-page';

describe('WrapperInvestigationPage', () => {
  let component: WrapperInvestigationPage;
  let fixture: ComponentFixture<WrapperInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
