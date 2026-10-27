import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetterAccordionPage } from './better-accordion-page';

describe('BetterAccordionPage', () => {
  let component: BetterAccordionPage;
  let fixture: ComponentFixture<BetterAccordionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetterAccordionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BetterAccordionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
