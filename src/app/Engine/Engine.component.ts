import { Component } from "@angular/core";

@Component({
    selector:'app-engine',
    standalone: true,
    templateUrl: './Engine.component.html',
    styleUrls: ['./Engine.component.scss']
})

export class EngineComponent{

    constructor(){
        console.log("Engine Component");
    }

    public pistonUp(){
        console.log("Piston goes up");
    }

    public pistonDown(){
        console.log("Piston goes down");
    }
}