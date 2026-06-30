import { Component } from '@angular/core';
import { Note, Notes } from '../../core/workout-data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  readonly notes: Note = Notes;
}