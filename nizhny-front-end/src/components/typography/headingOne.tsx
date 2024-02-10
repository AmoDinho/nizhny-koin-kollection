interface IHeadingProps {
  WrapperTypes: 'HeadingOne' | 'HeadingTwo' | 'HeadingThree' | 'HeadingFour';
  additonalClassNames: string;
  children: React.ReactNode;
}

type IWrapperSettings = {
  HeadingOne: string;
  HeadingTwo: string;
  HeadingThree: string;
  HeadingFour: string;
};

const wrapperSettings: IWrapperSettings = {
  HeadingOne: 'text-4xl font-bungee',
  HeadingTwo: 'text-2xl font-bungee',
  HeadingThree: 'text-xl font-advent',
  HeadingFour: 'text-base font-advent',
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
