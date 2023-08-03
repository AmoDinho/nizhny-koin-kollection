import SchemaBuilder from '@pothos/core';
import { IPlayer } from '../types';
import getPlayers from '../src/getPlayers';
// import getABoat from '../src/getABoat';
export const builder = new SchemaBuilder({});

const IPlayerGQL = builder.objectRef<IPlayer>('IPlayer');
IPlayerGQL.implement({
  fields: (t) => ({
    playerID: t.exposeString('playerID'),
  }),
});

builder.queryType({
  fields: (t) => ({
    getPlayers: t.field({
      description: 'Get Players',
      type: [IPlayerGQL],
      resolve: () => getPlayers(),
    }),
    // getABoat: t.field({
    //   description: 'Get A Baot ',
    //   type: [IBoatGQL],
    //   args: {
    //     boat_id: t.arg({
    //       type: 'String',
    //       description: 'Boat ID',
    //       required: true,
    //     }),
    //   },
    //   resolve: (root, args) => getABoat({ boat_id: args.boat_id }),
    // }),
  }),
});
// builder.mutationType({});
