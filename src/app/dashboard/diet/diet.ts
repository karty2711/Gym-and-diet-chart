import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MealMacros } from '../../core/workout-data';
import { WorkoutDataService } from '../../core/workout-data.service';

@Component({
  selector: 'app-diet',
  imports: [MatTabsModule, MatCardModule, NgTemplateOutlet],
  templateUrl: './diet.html',
  styleUrl: './diet.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DietComponent {
  readonly data = inject(WorkoutDataService);
  readonly planner = this.data.planner;

  hasMealItems(meal: MealMacros): boolean {
    return meal.protein.length > 0 || meal.fiber.length > 0 || meal.carbs.length > 0;
  }

  hasAlternatives(value: string): boolean {
    return value.includes('|');
  }
}
