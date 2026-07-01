import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CompletionService } from '../../core/completion.service';
import { DayPlan, Exercise, IntensityLevel } from '../../core/workout-data';
import { WorkoutDataService } from '../../core/workout-data.service';

@Component({
  selector: 'app-exercise',
  imports: [MatTabsModule, MatTableModule, MatCheckboxModule],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseComponent implements AfterViewInit {
  private readonly data = inject(WorkoutDataService);
  private readonly completion = inject(CompletionService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);

  readonly planner = this.data.planner;
  readonly selectedIntensity = signal<IntensityLevel>('Basic');
  readonly displayedColumns = signal<string[]>([
    'completed',
    'exercise',
    'sets',
    'reps',
    'rest',
    'type',
  ]);
  readonly expandedKey = signal<string | null>(null);

  readonly filteredByDay = computed(() => {
    const plan = this.planner();
    const intensity = this.selectedIntensity();
    if (!plan) {
      return new Map<string, Exercise[]>();
    }
    return new Map(
      plan.days.map((day) => [day.day, day.exercises.filter((e) => e.intensity === intensity)]),
    );
  });

  ngAfterViewInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.displayedColumns.set(
          result.matches
            ? ['completed', 'exercise', 'sets', 'reps', 'rest']
            : ['completed', 'exercise', 'sets', 'reps', 'rest', 'type'],
        );
      });
  }

  setIntensity(type: IntensityLevel): void {
    this.selectedIntensity.set(type);
    this.expandedKey.set(null);
  }

  exercisesForDay(day: DayPlan): Exercise[] {
    return this.filteredByDay().get(day.day) ?? [];
  }

  rowKey(day: string, row: Exercise): string {
    return `${day}::${row.name}`;
  }

  isExpanded(day: string, row: Exercise): boolean {
    return this.expandedKey() === this.rowKey(day, row);
  }

  expandedRowWhen(day: string): (index: number, row: Exercise) => boolean {
    return (_, row) => this.isExpanded(day, row);
  }

  toggle(day: string, row: Exercise): void {
    const key = this.rowKey(day, row);
    this.expandedKey.set(this.expandedKey() === key ? null : key);
  }

  onRowKeydown(event: KeyboardEvent, day: string, row: Exercise): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle(day, row);
    }
  }

  isCompleted(day: string, row: Exercise): boolean {
    return this.completion.isCompleted(day, row.name);
  }

  onCompletedChange(day: string, row: Exercise, checked: boolean): void {
    this.completion.setCompleted(day, row.name, checked);
  }
}
