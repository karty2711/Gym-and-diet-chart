import { signal } from '@angular/core';
import { GymPlanData, Note, Planner } from './workout-data';
import { WorkoutDataService } from './workout-data.service';

export const mockPlanner: Planner = {
  title: 'Weekly Strength Program',
  subtitle: { splits: ['Chest+Biceps × 2'] },
  days: [
    {
      day: 'Monday',
      label: 'Chest + Biceps - A',
      focus: 'Chest | Biceps',
      exercises: [
        {
          name: 'Push-Up',
          sets: 3,
          reps: '10',
          rest: '60 sec',
          type: 'Compound',
          intensity: 'Basic',
          note: 'Test note',
        },
      ],
      diet: [
        {
          breakfast: { protein: ['eggs'], fiber: [], carbs: [] },
          lunch: { protein: ['chicken'], fiber: [], carbs: [] },
          dinner: { protein: ['paneer'], fiber: [], carbs: [] },
          calories: { breakfast: '400', lunch: '500', dinner: '400' },
          totals: { protein: '150g', fiber: '20g', carbs: '100g', calories: '1800' },
          notes: { correction: 'Test note' },
        },
      ],
    },
  ],
};

export const mockNotes: Note = {
  calorie_strategy: 'Moderate deficit',
  protein_strategy: '150g/day',
  progression: 'Add weight weekly',
  sunday: 'Rest day',
};

export const mockGymPlanData: GymPlanData = { plan: mockPlanner, notes: mockNotes };

export function provideMockWorkoutDataService() {
  return {
    provide: WorkoutDataService,
    useValue: {
      planner: signal(mockPlanner),
      notes: signal(mockNotes),
      loading: signal(false),
      error: signal<string | null>(null),
      load: () => Promise.resolve(),
    },
  };
}
