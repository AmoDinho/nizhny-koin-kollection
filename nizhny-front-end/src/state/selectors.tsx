import { selector } from 'recoil';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/types/supabase';

// type IPlayer = Database['public']['Tables']['Players']['Row'];
// const createTeamMutation = selector({
//   key: 'createTeamState',
//   get: () => '',
//   set: ({ set }, newValue) => set(createTeamState, newValue instanceof DefaultValue ? newValue : createTeamState.push(newValue),
// });

// export { createTeamMutation };
const supabase = createClientComponentClient<Database>();

const cookieUserSession = selector({
  key: 'cookieUserSession',
  get: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session;
  },
});

export { cookieUserSession };
