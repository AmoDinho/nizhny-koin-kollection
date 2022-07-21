import { StackContext } from '@serverless-stack/resources';
import KoinDynamoDBResources from './dynamoDB';
import ResourceS3 from './s3';

const KoinStack = ({ stack }: StackContext) => {
  return {
    KoinDynamoDBResources: KoinDynamoDBResources,
    ResourceS3: ResourceS3(stack),
  };
};
export default KoinStack;
