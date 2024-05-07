'use client';
import { useSearchParams } from 'next/navigation';
import PageOne from './tabs/pageOne';
import PageTwo from './tabs/pageTwo';
import PageThree from './tabs/pageThree';
import isAuth from '@/components/hocs/isAuth';

function CreateTeam() {
  const searchParams = useSearchParams();
  const currentTabState = searchParams?.get('tabState') || '';
  console.log(`currentTabState: ${currentTabState}`);

  const renderComponent = (tabNumber: string): React.JSX.Element => {
    switch (tabNumber) {
      case 'one':
        return <PageOne />;
      case 'two':
        return <PageTwo />;
      case 'three':
        return <PageThree />;
      default:
        return <p>No component selected</p>;
    }
  };
  return <>{renderComponent(currentTabState)}</>;
}

export default isAuth(CreateTeam);
