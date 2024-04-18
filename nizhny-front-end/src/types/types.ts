import React from 'react';
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

type ICreateTeamSuccessResponse = {
  status: number;
  statusText: string;
};

type IGenericResponse = {
  status: number;
  statusText: string;
};
export type IGenericResponseParent = {
  data: IGenericResponse;
  error: IGenericResponse;
};

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
  user: IUser;
};
