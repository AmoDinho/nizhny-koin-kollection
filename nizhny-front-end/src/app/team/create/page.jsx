'use client';
import { useSearchParams } from 'next/navigation';

export default function CreateTeam() {
  const searchParams = useSearchParams();
  const currentTabState = searchParams.get('tabState');
  console.log(`currentTabState: ${currentTabState}`);
  return <></>;
}
