'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import type { Database } from '@/types/supabase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { TypographyWrapper } from '@/components/typography';
// type TFormData = {
//   email: string;
//   password: string;
// };

// type TFormPayload = {
//   key: string;
//   value: string;
// };

type IKeyFieldsType = 'email' | 'password';
export default function Login() {
  // const [formState, setFormState] = useState<TFormData>({
  //   email: '',
  //   password: '',
  // });
  const formSchema = z.object({
    email: z
      .string()
      .min(2, {
        message: 'Email must be a valid email',
      })
      .max(50),
    password: z.string().min(6, {
      message: 'Please enter your password',
    }),
  });
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const supabase = createClientComponentClient<Database>();

  // const handleFormChange = ({ key, value }: TFormPayload) => {
  //   let formStateClone: TFormData = { ...formState };
  //   formStateClone[key as IKeyFieldsType] = value;

  //   setFormState(formStateClone);
  // };

  const handleSignIn = async (
    values: z.infer<typeof formSchema>
  ): Promise<void> => {
    console.log('values', values);
    try {
      await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      router.refresh();
      router.push('/team/dashboard');
    } catch (e) {
      return alert('issue logging you in');
    }
  };

  return (
    <div className="grid grid-cols-1 p-5 justify-items-center">
      <TypographyWrapper WrapperTypes="HeadingOne" additonalClassNames="mb-10">
        {' '}
        Log In
      </TypographyWrapper>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignIn)}
          className="grid grid-cols-1 p-4 bg-white rounded-xl"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={() => router.push('/auth/login')}>Log In</Button>
        </form>
      </Form>
      {/* <input
          name="email"
          onChange={(e) =>
            handleFormChange({ key: 'email', value: e.currentTarget.value })
          }
        />
        <input
          name="password"
          onChange={(e) =>
            handleFormChange({ key: 'password', value: e.currentTarget.value })
          }
        />
        <button onClick={handleSignIn}>Sign In</button> */}
    </div>
  );
}
