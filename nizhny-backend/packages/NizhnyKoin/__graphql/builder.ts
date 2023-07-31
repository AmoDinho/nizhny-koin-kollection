import SchemaBuilder from '@pothos/core';
import { IBoat } from '../types';
import getBoats from '../src/getBoats';
import getABoat from '../src/getABoat';
export const builder = new SchemaBuilder({});

const IBoatGQL = builder.objectRef<IBoat>('IBoat');
IBoatGQL.implement({
  fields: (t) => ({
    boat_id: t.exposeString('boat_id'),
  }),
});

builder.queryType({
  fields: (t) => ({
    getBoats: t.field({
      description: 'Get Baots',
      type: [IBoatGQL],
      resolve: () => getBoats(),
    }),
    getABoat: t.field({
      description: 'Get A Baot ',
      type: [IBoatGQL],
      args: {
        boat_id: t.arg({
          type: 'String',
          description: 'Boat ID',
          required: true,
        }),
      },
      resolve: (root, args) => getABoat({ boat_id: args.boat_id }),
    }),
  }),
});
// builder.mutationType({});
