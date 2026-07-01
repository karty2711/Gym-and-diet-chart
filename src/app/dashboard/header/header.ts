import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WorkoutDataService } from '../../core/workout-data.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly data = inject(WorkoutDataService);
  readonly planner = this.data.planner;
}
