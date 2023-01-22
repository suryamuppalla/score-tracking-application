import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedTeamEntity } from '../models/application.model';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
})
export class TeamDetailsComponent implements OnInit {
  @Input() team: SelectedTeamEntity;
  @Output() emitter: EventEmitter<SelectedTeamEntity> = new EventEmitter();
  constructor(public appService: ApplicationService) {}

  ngOnInit() {
    this.appService.fetchGamesList(this.team);
  }

  removeFromList() {
    this.emitter.emit(this.team);
  }
}
