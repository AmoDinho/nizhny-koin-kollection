import { SSTConfig } from 'sst';
import ServiceOneStack from './stacks/serviceOne';
export default {
  config(_input) {
    return {
      name: 'nizhny-koin-reference',
      region: 'eu-west-1',
    };
  },
  stacks(app) {
    app.stack(ServiceOneStack);
  },
} satisfies SSTConfig;
