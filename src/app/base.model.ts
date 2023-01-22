export interface GameResponseModel {
  data?: GameModel[] | null;
  meta: MetaModel;
}

export interface GameModel {
  id: number;
  date: string;
  home_team: TeamModelOrVisitorTeamModel;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: TeamModelOrVisitorTeamModel;
  visitor_team_score: number;
  win?: boolean;
}

export interface TeamModelOrVisitorTeamModel {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface MetaModel {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
}

export interface TeamModel {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  name: string;
}

export interface TeamListResponse {
  data: TeamModel[];
  meta: MetaModel;
}

export interface SpecificTeamModel {
  team: TeamModel;
  games: GameModel[];
  averageScore?: number;
  conceededScore?: number;
}
