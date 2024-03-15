import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const useSupabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export { useSupabase };
