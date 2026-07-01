import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'gym-diet-chart-completed';

@Injectable({ providedIn: 'root' })
export class CompletionService {
  private readonly state = signal(new Set<string>(this.readFromStorage()));

  isCompleted(day: string, exerciseName: string): boolean {
    return this.state().has(this.key(day, exerciseName));
  }

  toggle(day: string, exerciseName: string): void {
    const next = new Set(this.state());
    const k = this.key(day, exerciseName);
    if (next.has(k)) {
      next.delete(k);
    } else {
      next.add(k);
    }
    this.state.set(next);
    this.persist(next);
  }

  setCompleted(day: string, exerciseName: string, completed: boolean): void {
    const next = new Set(this.state());
    const k = this.key(day, exerciseName);
    if (completed) {
      next.add(k);
    } else {
      next.delete(k);
    }
    this.state.set(next);
    this.persist(next);
  }

  private key(day: string, exerciseName: string): string {
    return `${day}::${exerciseName}`;
  }

  private readFromStorage(): string[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  }

  private persist(state: Set<string>): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...state]));
  }
}
