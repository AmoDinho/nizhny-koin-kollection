import { Table } from 'sst/constructs';
import { Construct } from 'constructs';

export interface IServiceOneTable {
  table: Table;
}

export interface IServiceOneResourcesDynamoDB {
  ServiceOneTable: IServiceOneTable;
}

const ServiceOneTable = (stack: Construct): IServiceOneTable => {
  const table = new Table(stack, `serviceOne-table`, {
    fields: {
      pk: 'string',
      sk: 'string',
    },
    primaryIndex: { partitionKey: 'pk' },
    globalIndexes: {
      gsi_One: { partitionKey: 'sk' },
    },
  });

  return { table };
};

const ServiceOneResoucesDynamoDB = (
  stack: Construct
): IServiceOneResourcesDynamoDB => {
  return {
    ServiceOneTable: ServiceOneTable(stack),
  };
};

export default ServiceOneResoucesDynamoDB;
