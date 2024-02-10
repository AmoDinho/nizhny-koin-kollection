import ParentImage from '@/components/image/parentImage';
import HeaderImage from '@/static/images/nizhny_banner.svg';
import BottomImage from '@/static/images/bottom_illustrations.svg';

import { TypographyWrapper } from '@/components/typography';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-primary-red-dark mb-5"
      >
        Nizhny Koin Kollection
      </TypographyWrapper>
      <ParentImage imagePath={HeaderImage} />
      <ParentImage imagePath={BottomImage} />
    </main>
  );
}
