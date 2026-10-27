import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataBindingPage } from './data-binding-page';

describe('DataBindingPage', () => {
  let component: DataBindingPage;
  let fixture: ComponentFixture<DataBindingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBindingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
