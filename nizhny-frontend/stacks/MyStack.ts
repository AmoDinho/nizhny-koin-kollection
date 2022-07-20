import { StackContext, Api, NextjsSite } from '@serverless-stack/resources';
import { App } from 'aws-cdk-lib';

export function MyStack({ stack, app }: StackContext) {
  const site = new NextjsSite(stack, 'nizhny-frontend', {
    path: 'frontend',
    environment: {
      REGION: app.region,
    },
  });

  stack.addOutputs({
    URL: site.url,
  });
}
