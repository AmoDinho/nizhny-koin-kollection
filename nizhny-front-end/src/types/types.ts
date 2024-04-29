import React from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import type { Database } from './supabase';
type IFeatures = {
  id: string;
  label: string;
  icon: React.JSX.Element;
};

export type IFeatureArray = IFeatures[];
export type IGetPaginatedPlayers = {
  from: number;
  to: number;
  limit: number;
};

export type IRenderLastItemsProps = {
  itemType: string;
};

type IGenericResponse = {
  status: number;
  statusText: string;
};
export type IGenericResponseParent = {
  data: IGenericResponse | null;
  error: PostgrestError | null;
};

type IAddPlayerUserTeamData = {
  data: Database['public']['Tables']['Players_UserTeams']['Insert'][];
  status: number;
  statusText: string;
};
export type IAddPlayerUserTeamResponse = {
  data: Database['public']['Tables']['Players_UserTeams']['Insert'][] | null;
  error: PostgrestError | null;
};

export interface ICreateUserTeamPayload {
  data: Database['public']['Tables']['UserTeams']['Insert'][] | null;
  status: number;
  statusText: string;
}
export type IUserTeam = Array<
  Database['public']['Tables']['UserTeams']['Insert']
>;

export type ICreateUserTeamResponse = {
  data: Database['public']['Tables']['UserTeams']['Insert'][] | null;
  error: PostgrestError | null;
};

export interface ITeam {
  usersTeams: Array<Database['public']['Tables']['Players']['Row']>;
}
export type IPlayer = Database['public']['Tables']['Players']['Row'] | null;
export type IPlayers = Array<IPlayer> | null;
export type ICreateTeamProps =
  Database['public']['Tables']['UserTeams']['Insert'];

export type ICreatePlayerUserTeamsProps = {
  userTeamID: Database['public']['Tables']['Players_UserTeams']['Insert']['userTeamID'];
  players: Database['public']['Tables']['Players_UserTeams']['Insert']['playerID'][];
};

type IUser = {
  id: string;
  factors: null;
  aud: string;
  iat: Number;
  iss: string;
  email: string;
  phone: string;
  app_metadata: {
    provider: string;
    providers: Array<string>;
  };
  user_metadata: Object;
  role: string;
  aal: string;
  amr: Array<Object>;
  session_id: string;
  is_anonymous: boolean;
};
export type IUserSession = {
  expires_at: Number;
  expires_in: Number;
  token_type: string;
  access_token: string;
  refresh_token: string;
  provider_token: string;
  provider_refresh_token: string;
  user: IUser;
};

export type IGetplayerCountResponse = {
  count: number | 0 | null;
  CountError: PostgrestError | null;
};

interface IPaginationNextProps {
  onClick: () => void;
}

interface IPaginationPrevProps {
  onClick: () => void;
}

export type IComponentRegistry = {
  [key: string]: React.FC<IPaginationNextProps | IPaginationPrevProps>;
};

export type IGetPaginatedPlayersResponse = {
  players: IPlayers;
  error: PostgrestError | null;
};
