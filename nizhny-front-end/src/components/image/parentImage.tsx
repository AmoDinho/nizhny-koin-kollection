import Image from 'next/image';
interface ImageProps {
  imagePath: string | null;
  additionalClassNames?: string;
  onClick?: () => void;
  width?: Number;
  height?: Number;
}

const ParentImage = ({
  imagePath,
  additionalClassNames,
  onClick,
  width,
  height,
}: ImageProps): React.JSX.Element => (
  <Image
    onClick={onClick}
    src={imagePath}
    alt="something went wrong"
    className={additionalClassNames}
    width={width ? width : 100}
    height={height ? height : 100}
  />
);

export default ParentImage;
