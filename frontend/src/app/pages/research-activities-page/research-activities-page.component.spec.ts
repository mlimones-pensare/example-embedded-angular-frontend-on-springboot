import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchActivitiesPageComponent } from './research-activities-page.component';

describe('ResearchActivitiesPageComponent', () => {
  let component: ResearchActivitiesPageComponent;
  let fixture: ComponentFixture<ResearchActivitiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchActivitiesPageComponent]
    });
    fixture = TestBed.createComponent(ResearchActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
