import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-show-teams-list',
  templateUrl: './show-teams-list.component.html',
  styleUrls: ['./show-teams-list.component.css'],
})
export class ShowTeamsListComponent implements OnInit {
  public teamId: number = null;
  constructor(public appService: ApplicationService) {}

  ngOnInit() {
    this.appService.fetchTeamsInformation();
  }

  removeTeam(teamIndex: number) {
    this.appService.selectedTeams.splice(teamIndex, 1);
  }
}
