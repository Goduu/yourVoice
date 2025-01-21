export const typeDefs = `#graphql
  type Signature {
    id: ID @id
    title: String!
    tone: String!
    languageStyle: String!
    levelOfFormality: String!
    formsOfAddress: String!
    emotionalAppeal: String!
  }

  type GeneratedText {
    id: ID @id
    text: String!
    generatedAt: DateTime!
    title: String!
    goal: String!
    withSignature: Signature! @relationship(type: "WITH_SIGNATURE", direction: OUT)
  }
`;