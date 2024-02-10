import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstructionsComponent} from "./components/instructions/instructions.component";
import {GameComponent} from "./components/game/game.component";
import {RankingComponent} from "./components/ranking/ranking.component";

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: '**', redirectTo: 'game' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
