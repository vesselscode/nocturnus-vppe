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

    public goesUp(){
        console.log("Piston goes up");
    }

    public goesDown(){
        console.log("Piston goes down");
    }
}