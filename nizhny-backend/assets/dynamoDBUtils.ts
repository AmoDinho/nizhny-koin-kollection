import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import {
  GetItemCommandInput,
  UpdateItemCommandInput,
  QueryCommandInput,
  PutItemCommandInput,
  DeleteItemCommandInput,
} from '@aws-sdk/client-dynamodb/dist-types/ts3.4';

const client = new DynamoDBClient({});

const Dynamo = {
  get: async (input: GetItemCommandInput): Promise<any> => {
    // eslint-disable-line  @typescript-eslint/no-explicit-any
    const command = new GetItemCommand(input);
    try {
      const { Item } = await client.send(command);
      if (Item) {
        return unmarshall(Item) as any; // eslint-disable-line  @typescript-eslint/no-explicit-any
      }
      return null;
    } catch (e) {
      console.log('Error', e);
      throw new Error(JSON.stringify(e));
    }
  },
  query: async (input: QueryCommandInput): Promise<Array<any> | null> => {
    // eslint-disable-line  @typescript-eslint/no-explicit-any
    const command = new QueryCommand(input);
    try {
      const { Items } = await client.send(command);
      if (Items) {
        return Items.map((Item) => {
          return unmarshall(Item);
        });
      }
      return null;
    } catch (e) {
      console.log('Error', e);
      throw new Error(JSON.stringify(e));
    }
  },
  update: async (input: UpdateItemCommandInput): Promise<any> => {
    // eslint-disable-line  @typescript-eslint/no-explicit-any
    const command = new UpdateItemCommand(input);
    try {
      const { Attributes } = await client.send(command);
      if (Attributes) {
        return unmarshall(Attributes) as any; // eslint-disable-line  @typescript-eslint/no-explicit-any
      }
      return null;
    } catch (e) {
      console.log('Error', e);
      throw new Error(JSON.stringify(e));
    }
  },
  put: async (input: PutItemCommandInput): Promise<any> => {
    // eslint-disable-line  @typescript-eslint/no-explicit-any
    const command = new PutItemCommand(input);
    try {
      const { Attributes } = await client.send(command);
      if (Attributes) {
        return unmarshall(Attributes) as any; // eslint-disable-line  @typescript-eslint/no-explicit-any
      }
      return null;
    } catch (e) {
      console.log('Error', e);
      throw new Error(JSON.stringify(e));
    }
  },

  delete: async (input: DeleteItemCommandInput): Promise<any> => {
    // eslint-disable-line  @typescript-eslint/no-explicit-any
    const command = new DeleteItemCommand(input);
    try {
      const { Attributes } = await client.send(command);
      if (Attributes) {
        return unmarshall(Attributes) as any; // eslint-disable-line  @typescript-eslint/no-explicit-any
      }
      return null;
    } catch (e) {
      console.log('Error', e);
      throw new Error(JSON.stringify(e));
    }
  },
};

export default Dynamo;
