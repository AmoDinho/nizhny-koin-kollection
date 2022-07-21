import { StackContext } from '@serverless-stack/resources';
import KoinDynamoDBResources from './dynamoDB';
const KoinStack = ({ stack }: StackContext) => {
  return {
    KoinDynamoDBResources: KoinDynamoDBResources,
  };
};
export default KoinStack;
