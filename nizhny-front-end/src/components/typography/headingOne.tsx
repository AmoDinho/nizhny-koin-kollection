interface HeadingProps {
  children: React.ReactNode;
}

export const HeadingOne = ({ children }: HeadingProps): React.JSX.Element => (
  <h1 className="text-3xl font-font-bungee">{children}</h1>
);
