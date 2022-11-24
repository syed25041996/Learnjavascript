import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildwelcomeComponent } from './childwelcome.component';

describe('ChildwelcomeComponent', () => {
  let component: ChildwelcomeComponent;
  let fixture: ComponentFixture<ChildwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildwelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
