import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpecificTeamModel } from '../models/base.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-specific-team-details',
  templateUrl: './specific-team-details.component.html',
  styleUrls: ['./specific-team-details.component.css'],
})
export class SpecificTeamDetailsComponent implements OnInit {
  @Input() specificTeam: SpecificTeamModel;
  @Output() emitter: EventEmitter<SpecificTeamModel> = new EventEmitter();
  constructor(public appService: HttpService) {}

  ngOnInit() {
    this.appService.getGamesOfSpecificTeam(this.specificTeam);
  }
}
