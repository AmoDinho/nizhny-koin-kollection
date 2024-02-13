interface IHeadingProps {
  WrapperTypes: 'HeadingOne' | 'HeadingTwo' | 'HeadingThree' | 'HeadingFour';
  additonalClassNames?: string;
  children: React.ReactNode;
}

enum EWrapperSettings {
  HeadingOne = 'text-4xl font-bungee',
  HeadingTwo = 'text-2xl font-bungee',
  HeadingThree = 'text-xl font-advent',
  HeadingFour = 'text-base font-advent',
}

const wrapperSettings = {
  HeadingOne: 'text-4xl font-bungee',
  HeadingTwo: 'text-2xl font-bungee',
  HeadingThree: 'text-xl font-advent',
  HeadingFour: 'text-base font-advent',
};

type wrapperSettings = {
  [key in EWrapperSettings]: string;
};

export const TypographyWrapper = ({
  WrapperTypes,
  children,
  additonalClassNames,
}: IHeadingProps): React.JSX.Element => (
  <h1 className={`${wrapperSettings[WrapperTypes]} ${additonalClassNames}`}>
    {children}
  </h1>
);

/*

<TypographyWrapper
type="one"
additionalClassNames="color-green"
>Hi there</>

*/
