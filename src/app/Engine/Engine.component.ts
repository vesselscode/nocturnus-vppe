import { Component } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
    selector:'app-engine',
    standalone: true,
    templateUrl: './Engine.component.html',
    styleUrls: ['./Engine.component.scss'],
    imports: [NgIf]
})

export class EngineComponent{

    public pistonPosition: String = "down";

    constructor(){
        console.log("Engine Component");
    }

    public pistonUp(){
        this.pistonPosition = "up";
        console.log("Piston goes up");
    }

    public pistonDown(){
        this.pistonPosition = "down";
        console.log("Piston goes down");
    }
}