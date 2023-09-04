import 'dotenv/config';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_API_KEY
);

export const uploadFile = async ({ fileData, filePath }) => {
  const { data, error } = await supabase.storage
    .from('nizhny-koin-ref')
    .upload(`teams/${filePath}`, fileData);

  return {
    error,
    data,
  };
};
