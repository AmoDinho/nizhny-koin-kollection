import Image from 'next/image';
interface ImageProps {
  imagePath: string;
  additionalClassNames?: string;
  onClick?: () => void;
}

const ParentImage = ({
  imagePath,
  additionalClassNames,
  onClick,
}: ImageProps): React.JSX.Element => (
  <Image
    onClick={onClick}
    src={imagePath}
    alt="something went wrong"
    className={additionalClassNames}
  />
);

export default ParentImage;
