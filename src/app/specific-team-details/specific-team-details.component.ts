import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpecificTeamModel } from '../models/base.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-specific-team-details',
  templateUrl: './specific-team-details.component.html',
  styleUrls: ['./specific-team-details.component.css'],
})
export class SpecificTeamDetailsComponent implements OnInit {
  @Input() team: SpecificTeamModel;
  @Output() emitter: EventEmitter<SpecificTeamModel> = new EventEmitter();
  constructor(public appService: HttpService) {}

  ngOnInit() {
    this.appService.fetchGamesList(this.team);
  }

  removeFromList() {
    this.emitter.emit(this.team);
  }
}
