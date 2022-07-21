const typeDefs = `

type Team {
  name:String!
  bio: String!
}

enum KoinType {
  BRONZE
  SILVER
  GOLD
  PLATINUM
}
type Koin {
  id: String!
  imgURL: String!
  team: Team!
  koinName: String!
  koinType: KoinType!
  koinValue: Int!

}
  type Query {
    hello: String
  }
`;

export { typeDefs };
