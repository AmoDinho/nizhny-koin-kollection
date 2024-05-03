import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/supabase';

const supabaseHelper = () => {
  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );

  return supabase;
};

export { supabaseHelper };
