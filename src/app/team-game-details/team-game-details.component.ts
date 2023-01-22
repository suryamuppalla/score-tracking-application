import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../application.service';
import { SelectedTeamEntity } from '../models/application.model';

@Component({
  selector: 'app-team-game-details',
  templateUrl: './team-game-details.component.html',
  styleUrls: ['./team-game-details.component.css'],
})
export class TeamGameDetailsComponent implements OnInit {
  public team: SelectedTeamEntity;
  constructor(
    private appService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    public location: Location
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.team = this.appService.selectedTeams.find(
        (item) => item.team.abbreviation === params.teamCode
      );
    });
  }

  ngOnInit() {}
}
