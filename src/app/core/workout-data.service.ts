import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { GymPlanData, Note, Planner } from './workout-data';

@Injectable({ providedIn: 'root' })
export class WorkoutDataService {
  private readonly http = inject(HttpClient);

  readonly planner = signal<Planner | null>(null);
  readonly notes = signal<Note | null>(null);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  load(): Promise<void> {
    return firstValueFrom(this.http.get<GymPlanData>('data/gym-plan.json'))
      .then((data) => {
        this.planner.set(data.plan);
        this.notes.set(data.notes);
        this.loading.set(false);
      })
      .catch(() => {
        this.error.set('Failed to load workout plan.');
        this.loading.set(false);
      });
  }
}
