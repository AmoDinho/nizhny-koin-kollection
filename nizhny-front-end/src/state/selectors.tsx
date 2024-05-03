import { selector } from 'recoil';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import type { Database } from '@/types/supabase';

// type IPlayer = Database['public']['Tables']['Players']['Row'];
// const createTeamMutation = selector({
//   key: 'createTeamState',
//   get: () => '',
//   set: ({ set }, newValue) => set(createTeamState, newValue instanceof DefaultValue ? newValue : createTeamState.push(newValue),
// }); NEXT_PUBLIC_SUPABASE_PROJECT_KEY

// export { createTeamMutation };
const cookieStore = cookies();

const cookieUserSession = selector({
  key: 'cookieUserSession',
  get: () => {
    const userCookie = cookieStore.get(
      `sb-${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_KEY}-auth-token`
    );
    return userCookie?.value;
  },
});

export { cookieUserSession };
