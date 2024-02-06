interface HeadingProps {
  text: string;
}

export const HeadingOne = ({ text }: HeadingProps): React.JSX.Element => (
  <h1 className="text-3xl">{text}</h1>
);
