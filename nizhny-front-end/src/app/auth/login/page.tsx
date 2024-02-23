'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import type { Database } from '@/types/supabase';

type TFormData = {
  email: string;
  password: string;
};

type TFormPayload = {
  key: string;
  value: string;
};

type IKeyFieldsType = 'email' | 'password';
export default function Login() {
  const [formState, setFormState] = useState<TFormData>({
    email: '',
    password: '',
  });
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleFormChange = ({ key, value }: TFormPayload) => {
    let formStateClone: TFormData = { ...formState };
    formStateClone[key as IKeyFieldsType] = value;

    setFormState(formStateClone);
  };

  return (
    <main>
      <p>Login</p>
    </main>
  );
}
