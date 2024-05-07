/*

@param routeTarget: string
@param paramsConstructor: func
return function
*/

import { useRouter } from 'next/navigation';
import { createUrl } from './utils';
export default function useRouterUtil() {
  const router = useRouter();
  const handleRouteChange = (
    routeTarget: string,
    searchParams: string,
    stateAction: string
  ) => {
    const newParams = new URLSearchParams(searchParams);

    console.log('routeTarget', routeTarget);
    if (routeTarget) {
      newParams.set(stateAction, routeTarget);
      console.log('xx-1');
    } else {
      console.log('xx-2');
      newParams.delete(stateAction);
    }

    router.push(createUrl('create', newParams));
  };

  return { handleRouteChange, router };
}
