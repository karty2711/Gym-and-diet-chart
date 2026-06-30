import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DietComponent } from "./dashboard/diet/diet";
import { FooterComponent } from "./dashboard/footer/footer";
import { ExerciseComponent } from "./dashboard/exercise/exercise";
import { HeaderComponent } from "./dashboard/header/header";

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, MatTableModule, MatCardModule, MatCheckboxModule, DietComponent, FooterComponent, ExerciseComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App {
  protected readonly title = signal('Gym-and-diet-chart');
}