import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { GYM_PLAN, Planner } from '../../core/workout-data';

@Component({
  selector: 'app-diet',
  imports: [MatTabsModule, MatCardModule],
  templateUrl: './diet.html',
  styleUrl: './diet.css',
})

export class DietComponent {
  readonly planner: Planner = GYM_PLAN;
}
