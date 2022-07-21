import { Bucket } from '@serverless-stack/resources';
import { Construct } from 'constructs';

const KoinBucket = (stack: Construct) => {
  return new Bucket(stack, `koin-bucket`);
};

const ResourceS3 = (stack: Construct) => {
  return {
    KoinBucket: KoinBucket(stack),
  };
};

export default ResourceS3;
