import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecificGameDetailsComponent } from './specific-game-details/specific-game-details.component';
import { AllTeamsDataComponent } from './all-teams-data/all-teams-data.component';

const routes: Routes = [
  {
    path: '',
    component: AllTeamsDataComponent,
  },
  {
    path: 'results/:teamCode',
    component: SpecificGameDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
