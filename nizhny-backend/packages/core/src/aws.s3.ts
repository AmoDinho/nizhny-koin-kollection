import {
  DeleteObjectsCommand,
  DeleteObjectsCommandInput,
  GetObjectCommand,
  GetObjectCommandInput,
  GetObjectTaggingCommand,
  GetObjectTaggingCommandInput,
  GetObjectTaggingCommandOutput,
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3';
import { ISignedURLParam } from './../types/interfaces';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

type IGetS3Args = {
  bucket?: string;
  key?: string;
};
export const getS3Object = async <T>(args: IGetS3Args): Promise<T> => {
  const client = new S3Client({});
  const params = {
    Bucket: args.bucket,
    Key: args.key,
  };
  const command = new GetObjectCommand(params);
  try {
    const data = await client.send(command);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const streamToString = (stream: any) =>
      new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const chunks: Array<any> = [];
        stream.on('data', (chunk: Blob) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    const bodyContents = (await streamToString(data.Body)) as string;
    return JSON.parse(bodyContents) as T;
  } catch (e) {
    console.log('ERROR', e);
    throw new Error(JSON.stringify(e));
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getS3SignedUrl = async (
  param: ISignedURLParam
): Promise<string> => {
  const command = new GetObjectCommand({
    Bucket: param.Bucket,
    Key: param.Key,
  });
  const client = new S3Client({});
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return await getSignedUrl(client, command, {
    expiresIn: param.Expires || 3600,
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const putObject = async (input: PutObjectCommandInput): Promise<any> => {
  const client = new S3Client({});
  const command = new PutObjectCommand(input);
  return client.send(command);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getObject = async (input: GetObjectCommandInput): Promise<any> => {
  const client = new S3Client({});
  const command = new GetObjectCommand(input);
  return client.send(command);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getObjectAsJSON = async <T>(
  input: GetObjectCommandInput
): Promise<T> => {
  const client = new S3Client({});
  const command = new GetObjectCommand(input);
  try {
    const data = await client.send(command);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const streamToString = (stream: any) =>
      new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const chunks: Array<any> = [];
        stream.on('data', (chunk: Blob) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    const bodyContents = (await streamToString(data.Body)) as string;
    return JSON.parse(bodyContents) as T;
  } catch (e) {
    console.log('ERROR', e);
    throw e;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getObjectTagging = async (
  input: GetObjectTaggingCommandInput
): Promise<GetObjectTaggingCommandOutput> => {
  const client = new S3Client({});
  const command = new GetObjectTaggingCommand(input);
  return client.send(command);
};

export const deleteS3Object = async <T>(args: IGetS3Args): Promise<T> => {
  const client = new S3Client({});
  const deleteParams = {
    Objects: [{ Key: args.key }],
  };
  const commandInput: DeleteObjectsCommandInput = {
    Bucket: args.bucket,
    Delete: deleteParams,
  };
  const command = new DeleteObjectsCommand(commandInput);
  try {
    const data = await client.send(command);
    return data as unknown as T;
  } catch (e) {
    console.log('ERROR', e);
    throw new Error(JSON.stringify(e));
  }
};
