require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_API_KEY,
  {
    auth: {
      persistSession: false,
    },
  }
);

const uploadFile = async ({ fileData, filePath }) => {
  const { data, error } = await supabase.storage
    .from('nizhny-koin-ref')
    .upload(`teams/${filePath}`, fileData);
  //   console.log('uploadFile', error, data);
  return { data, error };
};

module.exports = uploadFile;
