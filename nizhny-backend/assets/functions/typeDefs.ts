const typeDefs = `

type Team {
  name:String!
  bio: String!
}
type Koin {
  id: String!
  imgURL: String!
  team: Team!
}
  type Query {
    hello: String
  }
`;

export { typeDefs };
