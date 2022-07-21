import { Table } from '@serverless-stack/resources';
import { Construct } from 'constructs';

const KoinTable = (stack: Construct) => {
  return new Table(stack, `koin-table`, {
    fields: {
      id: 'string',
      koinName: 'string',
    },
    primaryIndex: { partitionKey: 'id', sortKey: 'koinName' },
  });
};

const KoinDynamoDB = (stack: Construct) => {
  return {
    KoinTable: KoinTable(stack),
  };
};

export default KoinDynamoDB;
