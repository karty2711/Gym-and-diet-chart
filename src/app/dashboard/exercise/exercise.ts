import { AfterViewInit, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { GYM_PLAN, Planner, Exercise } from '../../core/workout-data';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-exercise',
  imports: [MatTabsModule, MatTableModule, MatCheckboxModule],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css',
})

export class ExerciseComponent implements AfterViewInit {
  readonly planner: Planner = GYM_PLAN;
  readonly selectedIntensity = signal('Basic');
  public displayedColumns: string[] = ['completed', 'exercise', 'sets', 'reps', 'rest', 'type'];
  private expandedExerciseName: string | null = null;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe(['(max-width: 768px)'])
      .subscribe((result: { matches: any; breakpoints: { [x: string]: any; }; }) => {
        if (result.matches) {
          this.displayedColumns = ['completed', 'exercise', 'sets', 'reps', 'rest'];
        } else {
          this.displayedColumns = ['completed', 'exercise', 'sets', 'reps', 'rest', 'type'];
        }
      });
  }

  public isExpandedRow = (_: number, row: Exercise) => this.isExpanded(row);

  public setIntensity(type: 'Basic' | 'Intermediate' | 'Advanced') {
    this.selectedIntensity.set(type);
  }

  public getFilteredExercises(exercises: Exercise[]): Exercise[] {
    return exercises.filter(e => e.intensity === this.selectedIntensity());
  }

  public isExpanded(row: Exercise): boolean {
    return this.expandedExerciseName === row.name;
  }

  public toggle(row: Exercise): void {
    this.expandedExerciseName = this.isExpanded(row) ? null : row.name;
  }
}