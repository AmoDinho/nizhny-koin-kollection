/*

@param routeTarget: string
@param paramsConstructor: func
return function
*/

import { useRouter } from 'next/router';
import { createUrl } from './utils';
type searchParamsType = string;
export const RouterUtil = (
  routeTarget: string,
  searchParams: searchParamsType
) => {
  const router = useRouter();
  const newParams = new URLSearchParams(searchParams.toString());

  if (routeTarget) {
    newParams.set('tabState', routeTarget);
  } else {
    newParams.delete('tabState');
  }

  router.push(createUrl('team/create?tabState', newParams));
};
