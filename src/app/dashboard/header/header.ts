import { Component } from '@angular/core';
import { GYM_PLAN, Planner } from '../../core/workout-data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  readonly planner: Planner = GYM_PLAN;
}