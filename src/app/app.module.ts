import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AllTeamsDataComponent } from './all-teams-data/all-teams-data.component';
import { HttpClientModule } from '@angular/common/http';
import { SpecificTeamDetailsComponent } from './specific-team-details/specific-team-details.component';
import { RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { SpecificGameDetailsComponent } from './specific-game-details/specific-game-details.component';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    AllTeamsDataComponent,
    SpecificTeamDetailsComponent,
    SpecificGameDetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HttpService],
})
export class AppModule {}
