import { Api } from 'sst/constructs';
import { Construct } from 'constructs';
export interface IServiceOneAPIResource {
  ServiceOneAPI: Api;
}

const ServiceOneAPI = (Stack: Construct): Api => {
  const ServiceOneAPI = new Api(Stack, `ServiceOne-stack-api`, {
    routes: {
      'POST /ServiceOne-graphql': {
        type: 'graphql',
        function: 'packages/ServiceOne/__graphql/index.handler',
      },
      // pothos: {
      //   schema: 'packages/ServiceOne/__graphql/schema.ts',
      //   output: 'packages/ServiceOne/__graphql/schema.graphql',
      //   commands: [
      //     'cd packages/ServiceOne/__graphql && npx @genql/cli --output ./genql --schema ./schema.graphql --esm',
      //   ],
      // },
    },
    defaults: {
      function: {
        timeout: 40,
      },
    },
  });

  return ServiceOneAPI;
};

const ServiceOneResourcesAPI = (stack: Construct): IServiceOneAPIResource => {
  return {
    ServiceOneAPI: ServiceOneAPI(stack),
  };
};

export default ServiceOneResourcesAPI;
