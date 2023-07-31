import { Bucket } from 'sst/constructs';
import { Construct } from 'constructs';

export interface IServiceOneBucket {
  serviceOneBucket: Bucket;
}

export interface IServiceOneResourcesS3 {
  ServiceOneBucket: IServiceOneBucket;
}

const ServiceOneBucket = (stack: Construct): IServiceOneBucket => {
  const serviceOneBucket = new Bucket(stack, `serviceone-buckets`);
  return {
    serviceOneBucket,
  };
};

const ServiceOneResourceS3 = (stack: Construct) => {
  return {
    ServiceOneBucket: ServiceOneBucket(stack),
  };
};

export default ServiceOneResourceS3;
