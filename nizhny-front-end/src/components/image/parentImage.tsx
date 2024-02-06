import Image from 'next/image';
interface ImageProps {
  imagePath: string;
  additionalClassNames?: string;
}

const ParentImage = ({
  imagePath,
  additionalClassNames,
}: ImageProps): React.JSX.Element => (
  <Image src={imagePath} alt="something went wrong" />
);

export default ParentImage;
