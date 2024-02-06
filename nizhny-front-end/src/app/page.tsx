import Image from 'next/image';
import { HeadingOne } from '@/components/typography';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingOne>Nizhny Koin Kollection</HeadingOne>
    </main>
  );
}
