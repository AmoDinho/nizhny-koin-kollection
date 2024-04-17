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

export type ICreateTeamResponse = {
  status: number;
  statusText: string;
};

export type ICreateTeamProps =
  Database['public']['Tables']['UserTeams']['Insert'];
