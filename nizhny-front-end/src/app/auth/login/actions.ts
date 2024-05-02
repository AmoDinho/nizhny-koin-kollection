import { createClient } from '@/lib/useSupabaseServer';
import { redirect } from 'next/navigation';
// import { useSetRecoilState } from 'recoil';
// import { userSession } from '@/state/atom';
export async function login(formData) {
  console.log('formData', formData);

  const supabase = createClient();

  try {
    //sign user in
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      redirect('/');
    }

    redirect('/');
  } catch (e) {}

  //add the cookies to local storage

  //set the user in the recoil store

  //redirect user

  //return errors
}
