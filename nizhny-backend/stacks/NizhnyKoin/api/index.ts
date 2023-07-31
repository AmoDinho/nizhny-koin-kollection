import { Api } from 'sst/constructs';
import { Construct } from 'constructs';
export interface INizhnyKoinAPIResource {
  NizhnyKoinAPI: Api;
}

const NizhnyKoinAPI = (Stack: Construct): Api => {
  const NizhnyKoinAPI = new Api(Stack, `NizhnyKoin-stack-api`, {
    routes: {
      'POST /NizhnyKoin-graphql': {
        type: 'graphql',
        function: 'packages/NizhnyKoin/__graphql/index.handler',
      },
      // pothos: {
      //   schema: 'packages/NizhnyKoin/__graphql/schema.ts',
      //   output: 'packages/NizhnyKoin/__graphql/schema.graphql',
      //   commands: [
      //     'cd packages/NizhnyKoin/__graphql && npx @genql/cli --output ./genql --schema ./schema.graphql --esm',
      //   ],
      // },
    },
    defaults: {
      function: {
        timeout: 40,
      },
    },
  });

  return NizhnyKoinAPI;
};

const NizhnyKoinResourcesAPI = (stack: Construct): INizhnyKoinAPIResource => {
  return {
    NizhnyKoinAPI: NizhnyKoinAPI(stack),
  };
};

export default NizhnyKoinResourcesAPI;
