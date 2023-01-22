import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowTeamsListComponent } from './show-teams-list/show-teams-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { RouterModule } from '@angular/router';
import { ApplicationService } from './application.service';
import { TeamGameDetailsComponent } from './team-game-details/team-game-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ShowTeamsListComponent,
    TeamDetailsComponent,
    TeamGameDetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ApplicationService],
})
export class AppModule {}
