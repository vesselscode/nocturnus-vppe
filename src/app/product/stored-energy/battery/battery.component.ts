import { Component } from '@angular/core';

@Component({
  selector: 'app-battery',
  standalone: true,
  imports: [],
  templateUrl: './battery.component.html',
  styleUrl: './battery.component.scss'
})
export class BatteryComponent {

  public maxEnergyLimit: number = 10; // Define o limite de uma bateria, o qual deve ser possível alterar para cada tipo

}
