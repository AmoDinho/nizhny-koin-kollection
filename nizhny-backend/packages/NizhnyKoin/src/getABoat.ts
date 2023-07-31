import { IBoat } from '../types';
import Dynamo from '../../core/src/aws.dynamo';

const getABoat = async ({
  boat_id,
}: {
  boat_id: string;
}): Promise<IBoat | null> => {
  try {
    const result = await Dynamo.getItemV2({
      TableName: 'boats-table',
      Key: {
        boat_id: boat_id,
      },
    });

    if (!result.Item) throw new Error('No boat found');
    const boat = result?.Item as IBoat;
    return boat;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
export default getABoat;
