/*

@param routeTarget: string
@param paramsConstructor: func
return function
*/

import { useRouter } from 'next/navigation';
import { createUrl } from './utils';
export default function useRouterUtil() {
  const router = useRouter();
  const handleRouteChange = (routeTarget: string, searchParams: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    console.log('newParams', newParams, routeTarget);
    if (routeTarget) {
      newParams.set('tabState', routeTarget);
    } else {
      newParams.delete('tabState');
    }

    console.log('check', createUrl('team/create', newParams), newParams);
    router.push(createUrl('team/create', newParams));
  };

  return { handleRouteChange };
}
