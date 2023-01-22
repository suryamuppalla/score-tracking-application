import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { SpecificTeamModel } from '../models/base.model';

@Component({
  selector: 'app-specific-game-details',
  templateUrl: './specific-game-details.component.html',
  styleUrls: ['./specific-game-details.component.css'],
})
export class SpecificGameDetailsComponent implements OnInit {
  public team: SpecificTeamModel;
  constructor(
    private appService: HttpService,
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
