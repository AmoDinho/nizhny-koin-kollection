import { StackContext, GraphQLApi } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
  const api = new GraphQLApi(stack, 'nizhny-assets', {
    server: {
      handler: 'functoons/lambda.handler',
      bundle: {
        format: 'cjs',
      },
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
