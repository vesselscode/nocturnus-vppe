import { Routes } from '@angular/router';
import { GameScreenComponent } from './visuals/game-screen/game-screen.component';

export const routes: Routes = [
    { path: '', redirectTo: 'game-screen', pathMatch: 'full' },
    {
        path: 'game-screen',
        component: GameScreenComponent
    },
    { path: '**', redirectTo: 'game-screen' }
];