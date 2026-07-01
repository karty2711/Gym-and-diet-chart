export interface Planner {
  title: string;
  subtitle: Subtitle;
  days: DayPlan[];
}

interface Subtitle {
  splits: string[];
}

export interface DayPlan {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  label: string;
  focus: string;
  exercises: Exercise[];
  diet: Diet[];
}

export interface MealMacros {
  protein: string[];
  fiber: string[];
  carbs: string[];
}

export interface Calories {
  breakfast: string;
  lunch: string;
  snack?: string;
  dinner: string;
}

export interface Totals {
  protein: string;
  fiber: string;
  carbs: string;
  calories?: string;
}

export interface Diet {
  breakfast: MealMacros;
  lunch: MealMacros;
  snack?: MealMacros;
  dinner: MealMacros;
  calories: Calories;
  totals: Totals;
  notes: {
    correction: string;
  };
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  type: 'Compound' | 'Isolation';
  intensity: 'Basic' | 'Intermediate' | 'Advanced';
  note: string;
}

export interface Note {
  calorie_strategy: string;
  protein_strategy: string;
  progression: string;
  sunday: string;
}

export interface GymPlanData {
  plan: Planner;
  notes: Note;
}

export type IntensityLevel = Exercise['intensity'];
