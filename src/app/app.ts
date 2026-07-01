import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { WorkoutDataService } from './core/workout-data.service';
import { DietComponent } from './dashboard/diet/diet';
import { ExerciseComponent } from './dashboard/exercise/exercise';
import { FooterComponent } from './dashboard/footer/footer';
import { HeaderComponent } from './dashboard/header/header';

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, DietComponent, ExerciseComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly data = inject(WorkoutDataService);
}
