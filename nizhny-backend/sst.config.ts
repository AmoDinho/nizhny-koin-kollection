import { SSTConfig } from 'sst';
import NizhnyKoinStack from './stacks/NizhnyKoin';
export default {
  config(_input) {
    return {
      name: 'nizhny-koin-reference',
      region: 'eu-west-1',
    };
  },
  stacks(app) {
    app.stack(NizhnyKoinStack);
  },
} satisfies SSTConfig;
