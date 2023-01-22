export interface TeamGameResponse {
  data?: TeamGameEntity[] | null;
  meta: Meta;
}

export interface TeamGameEntity {
  id: number;
  date: string;
  home_team: HomeTeamEntityOrVisitorTeamEntity;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: HomeTeamEntityOrVisitorTeamEntity;
  visitor_team_score: number;
  win?: boolean;
}

export interface HomeTeamEntityOrVisitorTeamEntity {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Meta {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
}

export interface TeamEntity {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  name: string;
}

export interface TeamMetaEntity {
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export interface TeamListResponse {
  data: TeamEntity[];
  meta: TeamMetaEntity;
}

export interface SelectedTeamEntity {
  team: TeamEntity;
  games: TeamGameEntity[];
  averageScore?: number;
  conceededScore?: number;
}
