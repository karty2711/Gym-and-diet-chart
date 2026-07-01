import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockWorkoutDataService } from '../../core/test-fixtures';
import { DietComponent } from './diet';

describe('DietComponent', () => {
  let component: DietComponent;
  let fixture: ComponentFixture<DietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietComponent],
      providers: [provideZonelessChangeDetection(), provideMockWorkoutDataService()],
    }).compileComponents();

    fixture = TestBed.createComponent(DietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
