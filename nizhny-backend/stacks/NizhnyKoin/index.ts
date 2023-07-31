import { StackContext } from 'sst/constructs';
import NizhnyResourcesAPI from './api';

/*
Each service needs a stack file where you combine 
various peices of infrustruce.

Infra to add:

- [ DynamoDB]
- [ S3]
- [ SQS]



*/
const NizhnyKoinStack = ({ stack }: StackContext) => {
  const nizhnyKoinResourcesAPI = NizhnyResourcesAPI(stack);
  // const serviceOneResoucesDynamoDB = ServiceOneResoucesDynamoDB(stack);
  // const serviceOneResourcesS3 = ServiceOneResourceS3(stack);

  stack.addOutputs({
    NizhnyKoinAPIEndpoint: nizhnyKoinResourcesAPI.NizhnyKoinAPI.url,
  });

  return {
    nizhnyKoinResourcesAPI,
  };
};
export default NizhnyKoinStack;
