import { MyStack } from './MyStack';
import { App } from '@serverless-stack/resources';

//koin stacks
import KoinStack from './KoinStack';
export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'assets',
    bundle: {
      format: 'esm',
    },
  });
  app.stack(MyStack);
  app.stack(KoinStack, { id: `koin-infra` });
}
