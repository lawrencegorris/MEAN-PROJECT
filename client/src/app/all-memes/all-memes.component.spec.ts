import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMemesComponent } from './all-memes.component';

describe('AllMemesComponent', () => {
  let component: AllMemesComponent;
  let fixture: ComponentFixture<AllMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
