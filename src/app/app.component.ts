import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EengineComponent } from './eengine/eengine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EengineComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nocturnus-vppe';
}
