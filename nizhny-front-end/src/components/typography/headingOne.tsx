interface HeadingProps {
  children: React.ReactNode;
}

export const HeadingOne = ({ children }: HeadingProps): React.JSX.Element => (
  <h1 className="text-3xl">{children}</h1>
);
