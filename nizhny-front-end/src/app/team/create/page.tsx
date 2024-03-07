'use client';
import { useSearchParams } from 'next/navigation';
import PageOne from './tabs/pageOne';
import PageTwo from './tabs/pageTwo';

export default function CreateTeam() {
  const searchParams = useSearchParams();
  const currentTabState = searchParams?.get('tabState') || '';
  console.log(`currentTabState: ${currentTabState}`);

  const renderComponent = (tabNumber: string): React.JSX.Element => {
    switch (tabNumber) {
      case 'one':
        return <PageOne />;
      case 'two':
        return <PageTwo />;

      default:
        return <p>No component selected</p>;
    }
  };
  return <>{renderComponent(currentTabState)}</>;
}
