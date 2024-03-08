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

    if (routeTarget) {
      newParams.set('tabState', routeTarget);
    } else {
      newParams.delete('tabState');
    }

    router.push(createUrl('create', newParams));
  };

  return { handleRouteChange };
}
