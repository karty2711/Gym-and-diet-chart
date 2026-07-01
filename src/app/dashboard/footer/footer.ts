import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WorkoutDataService } from '../../core/workout-data.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly data = inject(WorkoutDataService);
  readonly notes = this.data.notes;
}
