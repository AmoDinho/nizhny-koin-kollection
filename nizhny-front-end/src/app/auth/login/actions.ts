'use server';
import { createClient } from '@/lib/useSupabaseServer';
import { IFormDataPayload } from '@/types/types';
import { redirect } from 'next/navigation';
// import { useSetRecoilState } from 'recoil';
// import { userSession } from '@/state/atom';
export async function login(formData: IFormDataPayload) {
  console.log('formData', formData);

  const supabase = createClient();

  try {
    //sign user in
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    console.log('data', data);
    console.log('error', error);

    if (error) {
      redirect('/');
    }
  } catch (e) {
    console.log('eee', e);
  }
  redirect('/team/dashboard');

  //add the cookies to local storage

  //set the user in the recoil store

  //redirect user

  //return errors
}
