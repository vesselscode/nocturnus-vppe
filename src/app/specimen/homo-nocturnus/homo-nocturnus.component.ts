import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-homo-nocturnus',
  standalone: true,
  imports: [],
  templateUrl: './homo-nocturnus.component.html',
  styleUrl: './homo-nocturnus.component.scss'
})
export class HomoNocturnusComponent {

  public dead!: boolean;

  constructor() {
    console.log("Homo Nocturnus Component");
  }

  public exposedToSunlight(){
    console.log("Homo Nocturnus was exposed to sunlight");
    console.log("puff! Desintegrated!");
  }

  public exposedToHolyWater(){
    console.log("Homo Nocturnus was exposed to holy water");
    console.log("it falls dead!");
    console.log("piston goes down");
  }

  public exposedToBlood(){
    console.log("Homo Nocturnus was exposed to blood");
    console.log("it's alive!");
    console.log('piston goes up')
  }

  public lifeStatus() {
    if( this.dead !== true) {
      console.log("emits deadStatus to engine")
    }
    console.log("emits undeadStatus to engine")
  }
}
