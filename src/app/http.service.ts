import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  SpecificTeamModel,
  TeamModel,
  GameResponseModel,
  TeamListResponse,
} from './base.model';
import {getLastTwelveDays} from "./date.helper";

const API_BASE_URL = 'https://free-nba.p.rapidapi.com';

@Injectable()
export class HttpService {
  public teamsListData: TeamModel[] = [];
  public selectedTeams: SpecificTeamModel[] = [];
  public lastTwelveDays: string[] = [];
  public httpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = this.httpHeaders.append(
      'X-RapidAPI-Key',
      '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX'
    );
    this.httpHeaders = this.httpHeaders.append(
      'X-RapidAPI-Host',
      'free-nba.p.rapidapi.com'
    );
    this.lastTwelveDays = getLastTwelveDays();
  }

  getAllTeamsAsAList() {
    this.httpClient
      .get(`${API_BASE_URL}/teams`, { headers: this.httpHeaders })
      .subscribe((response: TeamListResponse) => {
        this.teamsListData = response.data;
      });
  }
  setTeamDetails(teamId: number) {
    const team = Number(teamId);
    const selectedTeamIndex = this.selectedTeams.findIndex(
      (item) => item.team.id === team
    );
    if (selectedTeamIndex === -1) {
      this.selectedTeams.push({
        team: this.teamsListData.find((item) => item.id === team),
        games: [],
      });
    }
  }

  getGamesOfSpecificTeam(team: SpecificTeamModel) {
    if (team.games?.length) {
      return;
    }
    let httpParams: HttpParams = new HttpParams();
    this.lastTwelveDays.forEach((date) => {
      httpParams = httpParams.append('dates[]', date);
    });
    httpParams = httpParams.append('team_ids[]', team.team.id);
    this.httpClient
      .get(`${API_BASE_URL}/games`, {
        headers: this.httpHeaders,
        params: httpParams,
      })
      .subscribe((response: GameResponseModel) => {
        let averageScore = 0;
        let conceededScore = 0;
        response.data?.forEach((data) => {
          data.win = data.home_team_score - data.visitor_team_score > 0;
          if (data.home_team?.id === team.team.id) {
            averageScore += data.home_team_score;
            conceededScore += data.visitor_team_score;
          }
          if (data.visitor_team?.id === team.team.id) {
            averageScore += data.visitor_team_score;
            conceededScore += data.home_team_score;
          }
          team.games.push(data);
        });
        team.averageScore = Math.round(averageScore / response.data.length);
        team.conceededScore = Math.round(conceededScore / response.data.length);
      });
  }
}
