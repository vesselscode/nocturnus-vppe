import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameScreenComponent } from "./visuals/game-screen/game-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nocturnus-vppe';
}
