import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveResuableTableComponent } from './responsive-resuable-table.component';

describe('ResponsiveResuableTableComponent', () => {
  let component: ResponsiveResuableTableComponent;
  let fixture: ComponentFixture<ResponsiveResuableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveResuableTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsiveResuableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
