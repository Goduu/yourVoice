import { gql } from "@apollo/client"

export const GET_SIGNATURE = gql`
  query GetSignature($id: ID!) {
  signatures(where: { id: $id },limit: 1) {
    id
    title
    tone
    languageStyle
    levelOfFormality
    formsOfAddress
    emotionalAppeal
  }
}
`

export const GET_SIGNATURES = gql`
  query GetSignatures {
    signatures {
      id
      title
      tone
      languageStyle
      levelOfFormality
      formsOfAddress
      emotionalAppeal
    }
  }
`

export const CREATE_SIGNATURE = gql`
  mutation CreateSignature($input: [SignatureCreateInput!]!) {
  createSignatures(input: $input) {
    signatures {
      id
  }
  }
}
`

export const UPDATE_SIGNATURE = gql`
  mutation UpdateSignature(
  $id: ID!,
  $title: String,
  $tone: String,
  $languageStyle: String,
  $levelOfFormality: String,
  $formsOfAddress: String,
  $emotionalAppeal: String,
  $hasShiftSummary: [ShiftSummaryUpdateInput!]!,
  $hasNextShift: [NextShiftUpdateInput!]!
) {
  updateSignatures(
    where: { id: $id },
    update: {
      title: $title,
      tone: $tone,
      languageStyle: $languageStyle,
      levelOfFormality: $levelOfFormality,
      formsOfAddress: $formsOfAddress,
      emotionalAppeal: $emotionalAppeal,
      hasShiftSummary: { update: $hasShiftSummary },
      hasNextShift: { update: $hasNextShift }
    }
  ) {
    signatures {
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

export const DELETE_SIGNATURE = gql`
  mutation DeleteSignature($where: SignatureWhere) {
    deleteSignatures(where: $where) {
      nodesDeleted
    }
  }
`


