import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
  UpdateCommand,
  UpdateCommandInput,
  UpdateCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
  DeleteCommand,
  DeleteCommandInput,
  DeleteCommandOutput,
  BatchWriteCommand,
  BatchWriteCommandInput,
  ScanCommandInput,
  ScanCommand,
  ScanCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import { RecordScalar, ScalarType } from '../types';

export const dynamoClient = new DynamoDBClient({});
export const DynamoDbDocument = DynamoDBDocumentClient.from(dynamoClient);

const Dynamo = {
  /* eslint-enable */
  queryItemV2: async (
    input: QueryCommandInput
  ): Promise<QueryCommandOutput> => {
    return DynamoDbDocument.send(new QueryCommand(input));
  },
  deleteItemV2: async (
    input: DeleteCommandInput
  ): Promise<DeleteCommandOutput> => {
    return DynamoDbDocument.send(new DeleteCommand(input));
  },
  updateItemV2: async (
    input: UpdateCommandInput
  ): Promise<UpdateCommandOutput> => {
    return DynamoDbDocument.send(new UpdateCommand(input));
  },
  putItemV2: async (input: PutCommandInput): Promise<PutCommandOutput> => {
    return DynamoDbDocument.send(new PutCommand(input));
  },
  getItemV2: async (input: GetCommandInput): Promise<GetCommandOutput> => {
    return DynamoDbDocument.send(new GetCommand(input));
  },
  scanItemsV2: async (input: ScanCommandInput): Promise<ScanCommandOutput> => {
    return DynamoDbDocument.send(new ScanCommand(input));
  },
};

/**
 * Get dynamodb updates expression keys from an old and new object.
 * @param oldObject old record object
 * @param newObject new record object
 * @returns A subset of the dynamodb.update keys (ExpressionAttributeNames, ExpressionAttributeValues, UpdateExpression)
 * using the old and new record objects.
 */
export const getDynamoItemsUpdateParams = <T>(
  oldObject: RecordScalar<T>,
  newObject: RecordScalar<T>
): RecordScalar<T> => {
  // add keys validation
  if (typeof oldObject === 'object' && typeof newObject === 'object') {
    const createExpressions = (() => {
      const ExpressionAttributeNames: RecordScalar = {};
      const ExpressionAttributeValues: RecordScalar = {};
      let UpdateExpression = 'SET ';

      return (
        placeholder: string,
        attribute: string,
        value: ScalarType,
        end: boolean
      ) => {
        const attr = '#' + placeholder;
        const val = ':' + placeholder;
        ExpressionAttributeNames[attr] = attribute;
        ExpressionAttributeValues[val] = value;
        UpdateExpression += `${attr} = ${val}${end ? '' : ', '}`;
        return {
          ExpressionAttributeNames,
          ExpressionAttributeValues,
          UpdateExpression,
        };
      };
    })();

    const _obj = Object.entries(newObject);
    const count = _obj.length - 1;
    /* eslint-disable */
    return _obj.reduce((acc, [key, value]: [string, any], index) => {
      // if (typeof value === 'object' && Object.is(acc[key], value)) {
      // @ts-ignore | Please resolve, type: any
      const oldValue = (oldObject as any)[key];
      if (typeof value === 'object' && oldValue) {
        // throw error if oldValue is not iterable.
        // @ts-ignore | Please resolve, type: any
        const newVal = { ...oldValue, ...value };
        return createExpressions(
          3333 + index + '',
          key,
          newVal,
          index == count
        );
      } else {
        return createExpressions(3333 + index + '', key, value, index == count);
      }
      /* eslint-enable */
    }, {});
  }
  throw new Error('This function expects object data type');
};

export default Dynamo;
