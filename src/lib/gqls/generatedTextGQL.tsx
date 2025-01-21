import { gql } from "@apollo/client";

export const CREATE_GENERATED_TEXT = gql`
  mutation CreateGeneratedText($input: [GeneratedTextCreateInput!]!) {
  createGeneratedTexts(input: $input) {
    generatedTexts {
      id
  }
  }
}
`

export const GET_GENERATED_TEXTS = gql`
  query GetGeneratedTexts {
    generatedTexts {
      id
      title
      text
      goal
      generatedAt
      withSignature {
        id
        title
        tone
        languageStyle
        levelOfFormality
        formsOfAddress
        emotionalAppeal
      }
    }
  }
`