import { supabaseHelper } from '@/lib/useSupabase';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
interface IAuthProps {
  Component: React.ComponentType;
}
export default function isAuth(Component: any) {
  return function IsAuth() {
    const router = useRouter();
    const checkUserSession = async () => {
      const session = await supabaseHelper().auth.getSession();
      // console.log('isAuth', session);
      if (session.data.session?.user.aud !== 'authenticated') {
        router.push('/');
      }
    };

    useEffect(() => {
      checkUserSession();
    });
    return <Component />;
  };
}
