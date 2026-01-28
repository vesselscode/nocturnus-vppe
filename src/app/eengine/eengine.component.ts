import { Component } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
    selector:'app-eengine',
    standalone: true,
    templateUrl: './eengine.component.html',
    styleUrls: ['./eengine.component.scss'],
    imports: [NgIf]
})

export class EengineComponent{

    public pistonPosition: String = "down";
    public eengineIntegrity = 100; // não pode ser menor que 0
    public eengineStatus = ""
    public generatedEnergy: number = 0; // Energia gerada pelo pistão
    public pistonUseDecreaser: number = 3; // deve subtrair do eengineIntegrity a cada uso do pistão


    constructor(){
        console.log("construtor");
        console.log(this.integrity());
        this.pistonUse;
    }

    public pistonUp(){
        this.pistonPosition = "up";
        console.log("Piston goes up");
        console.log(this.integrity());
        this.pistonUse();
        this.integrity();
        
    }

    public pistonDown(){
        this.pistonPosition = "down";
        console.log("Piston goes down");
    }

    public integrity(){
        if(this.eengineIntegrity === 0){
            this.eengineStatus = "Engine is broken, the vampire escaped!";
        }
        else if(this.eengineIntegrity < 50){
            this.eengineStatus = "Engine is damaged, it needs repair!";
        }
        
        this.eengineStatus = "Engine is in good condition.";
        
    } 

    public pistonUse(){
        if (this.pistonPosition === "up") {
            this.generatedEnergy += 1; // Gera energia ao mover o pistão para baixo
            this.eengineIntegrity -= this.pistonUseDecreaser; // Diminui a integridade do motor
            console.log(`Energy generated: ${this.generatedEnergy} units`);
            console.log(`Engine integrity: ${this.eengineIntegrity}`);
        }
    }
}