import { BreakpointObserver } from '@angular/cdk/layout';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideMockWorkoutDataService } from '../../core/test-fixtures';
import { ExerciseComponent } from './exercise';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideMockWorkoutDataService(),
        {
          provide: BreakpointObserver,
          useValue: { observe: () => of({ matches: false, breakpoints: {} }) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter exercises by intensity', () => {
    const day = component.planner()!.days[0];
    expect(component.exercisesForDay(day).length).toBe(1);
    component.setIntensity('Advanced');
    expect(component.exercisesForDay(day).length).toBe(0);
  });
});
