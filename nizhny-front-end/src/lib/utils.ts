import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { supabaseHelper } from './useSupabase';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrl = (
  pathName: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathName}${queryString}`;
};

type IUserIDResponse = string;
export const getUserID = async (): Promise<IUserIDResponse> => {
  const session = await supabaseHelper().auth.getSession();

  // console.log('getUserID', session);
  if (session.data.session?.user.aud === 'authenticated') {
    return session.data.session?.user.id;
  } else {
    throw 'No user found';
  }
};
