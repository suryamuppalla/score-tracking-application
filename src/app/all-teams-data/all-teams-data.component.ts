import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-teams-data',
  templateUrl: './all-teams-data.component.html',
  styleUrls: ['./all-teams-data.component.css'],
})
export class AllTeamsDataComponent implements OnInit {
  public teamId: number = null;
  constructor(public appService: HttpService) {}

  ngOnInit() {
    this.appService.getAllTeamsAsAList();
  }

  removeTeam(teamIndex: number) {
    this.appService.selectedTeams.splice(teamIndex, 1);
  }
}
