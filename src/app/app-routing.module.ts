import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamGameDetailsComponent } from './team-game-details/team-game-details.component';
import { ShowTeamsListComponent } from './show-teams-list/show-teams-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShowTeamsListComponent,
  },
  {
    path: 'results/:teamCode',
    component: TeamGameDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
