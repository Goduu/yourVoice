import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  signatures: Array<Signature>;
  signaturesConnection: SignaturesConnection;
  signaturesAggregate: SignatureAggregateSelection;
  generatedTexts: Array<GeneratedText>;
  generatedTextsConnection: GeneratedTextsConnection;
  generatedTextsAggregate: GeneratedTextAggregateSelection;
};

export type QuerySignaturesArgs = {
  where?: InputMaybe<SignatureWhere>;
  options?: InputMaybe<SignatureOptions>;
};

export type QuerySignaturesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<SignatureWhere>;
  sort?: InputMaybe<Array<InputMaybe<SignatureSort>>>;
};

export type QuerySignaturesAggregateArgs = {
  where?: InputMaybe<SignatureWhere>;
};

export type QueryGeneratedTextsArgs = {
  where?: InputMaybe<GeneratedTextWhere>;
  options?: InputMaybe<GeneratedTextOptions>;
};

export type QueryGeneratedTextsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<GeneratedTextWhere>;
  sort?: InputMaybe<Array<InputMaybe<GeneratedTextSort>>>;
};

export type QueryGeneratedTextsAggregateArgs = {
  where?: InputMaybe<GeneratedTextWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createSignatures: CreateSignaturesMutationResponse;
  deleteSignatures: DeleteInfo;
  updateSignatures: UpdateSignaturesMutationResponse;
  createGeneratedTexts: CreateGeneratedTextsMutationResponse;
  deleteGeneratedTexts: DeleteInfo;
  updateGeneratedTexts: UpdateGeneratedTextsMutationResponse;
};

export type MutationCreateSignaturesArgs = {
  input: Array<SignatureCreateInput>;
};

export type MutationDeleteSignaturesArgs = {
  where?: InputMaybe<SignatureWhere>;
};

export type MutationUpdateSignaturesArgs = {
  where?: InputMaybe<SignatureWhere>;
  update?: InputMaybe<SignatureUpdateInput>;
};

export type MutationCreateGeneratedTextsArgs = {
  input: Array<GeneratedTextCreateInput>;
};

export type MutationDeleteGeneratedTextsArgs = {
  where?: InputMaybe<GeneratedTextWhere>;
  delete?: InputMaybe<GeneratedTextDeleteInput>;
};

export type MutationUpdateGeneratedTextsArgs = {
  where?: InputMaybe<GeneratedTextWhere>;
  update?: InputMaybe<GeneratedTextUpdateInput>;
  connect?: InputMaybe<GeneratedTextConnectInput>;
  disconnect?: InputMaybe<GeneratedTextDisconnectInput>;
  create?: InputMaybe<GeneratedTextRelationInput>;
  delete?: InputMaybe<GeneratedTextDeleteInput>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type CreateGeneratedTextsMutationResponse = {
  __typename?: "CreateGeneratedTextsMutationResponse";
  info: CreateInfo;
  generatedTexts: Array<GeneratedText>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateSignaturesMutationResponse = {
  __typename?: "CreateSignaturesMutationResponse";
  info: CreateInfo;
  signatures: Array<Signature>;
};

export type DateTimeAggregateSelection = {
  __typename?: "DateTimeAggregateSelection";
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type GeneratedText = {
  __typename?: "GeneratedText";
  id?: Maybe<Scalars["ID"]["output"]>;
  text: Scalars["String"]["output"];
  generatedAt: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  goal: Scalars["String"]["output"];
  withSignatureAggregate?: Maybe<GeneratedTextSignatureWithSignatureAggregationSelection>;
  withSignature: Signature;
  withSignatureConnection: GeneratedTextWithSignatureConnection;
};

export type GeneratedTextWithSignatureAggregateArgs = {
  where?: InputMaybe<SignatureWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GeneratedTextWithSignatureArgs = {
  where?: InputMaybe<SignatureWhere>;
  options?: InputMaybe<SignatureOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GeneratedTextWithSignatureConnectionArgs = {
  where?: InputMaybe<GeneratedTextWithSignatureConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<GeneratedTextWithSignatureConnectionSort>>;
};

export type GeneratedTextAggregateSelection = {
  __typename?: "GeneratedTextAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  text: StringAggregateSelection;
  generatedAt: DateTimeAggregateSelection;
  title: StringAggregateSelection;
  goal: StringAggregateSelection;
};

export type GeneratedTextEdge = {
  __typename?: "GeneratedTextEdge";
  cursor: Scalars["String"]["output"];
  node: GeneratedText;
};

export type GeneratedTextsConnection = {
  __typename?: "GeneratedTextsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<GeneratedTextEdge>;
};

export type GeneratedTextSignatureWithSignatureAggregationSelection = {
  __typename?: "GeneratedTextSignatureWithSignatureAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<GeneratedTextSignatureWithSignatureNodeAggregateSelection>;
};

export type GeneratedTextSignatureWithSignatureNodeAggregateSelection = {
  __typename?: "GeneratedTextSignatureWithSignatureNodeAggregateSelection";
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  tone: StringAggregateSelection;
  languageStyle: StringAggregateSelection;
  levelOfFormality: StringAggregateSelection;
  formsOfAddress: StringAggregateSelection;
  emotionalAppeal: StringAggregateSelection;
};

export type GeneratedTextWithSignatureConnection = {
  __typename?: "GeneratedTextWithSignatureConnection";
  edges: Array<GeneratedTextWithSignatureRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type GeneratedTextWithSignatureRelationship = {
  __typename?: "GeneratedTextWithSignatureRelationship";
  cursor: Scalars["String"]["output"];
  node: Signature;
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Signature = {
  __typename?: "Signature";
  id?: Maybe<Scalars["ID"]["output"]>;
  title: Scalars["String"]["output"];
  tone: Scalars["String"]["output"];
  languageStyle: Scalars["String"]["output"];
  levelOfFormality: Scalars["String"]["output"];
  formsOfAddress: Scalars["String"]["output"];
  emotionalAppeal: Scalars["String"]["output"];
};

export type SignatureAggregateSelection = {
  __typename?: "SignatureAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  title: StringAggregateSelection;
  tone: StringAggregateSelection;
  languageStyle: StringAggregateSelection;
  levelOfFormality: StringAggregateSelection;
  formsOfAddress: StringAggregateSelection;
  emotionalAppeal: StringAggregateSelection;
};

export type SignatureEdge = {
  __typename?: "SignatureEdge";
  cursor: Scalars["String"]["output"];
  node: Signature;
};

export type SignaturesConnection = {
  __typename?: "SignaturesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<SignatureEdge>;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateGeneratedTextsMutationResponse = {
  __typename?: "UpdateGeneratedTextsMutationResponse";
  info: UpdateInfo;
  generatedTexts: Array<GeneratedText>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateSignaturesMutationResponse = {
  __typename?: "UpdateSignaturesMutationResponse";
  info: UpdateInfo;
  signatures: Array<Signature>;
};

export type GeneratedTextConnectInput = {
  withSignature?: InputMaybe<GeneratedTextWithSignatureConnectFieldInput>;
};

export type GeneratedTextCreateInput = {
  text: Scalars["String"]["input"];
  generatedAt: Scalars["DateTime"]["input"];
  title: Scalars["String"]["input"];
  goal: Scalars["String"]["input"];
  withSignature?: InputMaybe<GeneratedTextWithSignatureFieldInput>;
};

export type GeneratedTextDeleteInput = {
  withSignature?: InputMaybe<GeneratedTextWithSignatureDeleteFieldInput>;
};

export type GeneratedTextDisconnectInput = {
  withSignature?: InputMaybe<GeneratedTextWithSignatureDisconnectFieldInput>;
};

export type GeneratedTextOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more GeneratedTextSort objects to sort GeneratedTexts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GeneratedTextSort>>;
};

export type GeneratedTextRelationInput = {
  withSignature?: InputMaybe<GeneratedTextWithSignatureCreateFieldInput>;
};

/** Fields to sort GeneratedTexts by. The order in which sorts are applied is not guaranteed when specifying many fields in one GeneratedTextSort object. */
export type GeneratedTextSort = {
  id?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  generatedAt?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  goal?: InputMaybe<SortDirection>;
};

export type GeneratedTextUpdateInput = {
  text?: InputMaybe<Scalars["String"]["input"]>;
  generatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  goal?: InputMaybe<Scalars["String"]["input"]>;
  withSignature?: InputMaybe<GeneratedTextWithSignatureUpdateFieldInput>;
};

export type GeneratedTextWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT?: InputMaybe<Scalars["String"]["input"]>;
  text_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  text_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  text_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  generatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  generatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  generatedAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  generatedAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  generatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  generatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  generatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  generatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  goal?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  goal_NOT?: InputMaybe<Scalars["String"]["input"]>;
  goal_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  goal_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  goal_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  goal_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  goal_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  goal_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  goal_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  goal_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<GeneratedTextWhere>>;
  AND?: InputMaybe<Array<GeneratedTextWhere>>;
  NOT?: InputMaybe<GeneratedTextWhere>;
  withSignature?: InputMaybe<SignatureWhere>;
  withSignature_NOT?: InputMaybe<SignatureWhere>;
  withSignatureConnection?: InputMaybe<GeneratedTextWithSignatureConnectionWhere>;
  withSignatureConnection_NOT?: InputMaybe<GeneratedTextWithSignatureConnectionWhere>;
  withSignatureAggregate?: InputMaybe<GeneratedTextWithSignatureAggregateInput>;
};

export type GeneratedTextWithSignatureAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<GeneratedTextWithSignatureAggregateInput>>;
  OR?: InputMaybe<Array<GeneratedTextWithSignatureAggregateInput>>;
  NOT?: InputMaybe<GeneratedTextWithSignatureAggregateInput>;
  node?: InputMaybe<GeneratedTextWithSignatureNodeAggregationWhereInput>;
};

export type GeneratedTextWithSignatureConnectFieldInput = {
  where?: InputMaybe<SignatureConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type GeneratedTextWithSignatureConnectionSort = {
  node?: InputMaybe<SignatureSort>;
};

export type GeneratedTextWithSignatureConnectionWhere = {
  AND?: InputMaybe<Array<GeneratedTextWithSignatureConnectionWhere>>;
  OR?: InputMaybe<Array<GeneratedTextWithSignatureConnectionWhere>>;
  NOT?: InputMaybe<GeneratedTextWithSignatureConnectionWhere>;
  node?: InputMaybe<SignatureWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SignatureWhere>;
};

export type GeneratedTextWithSignatureCreateFieldInput = {
  node: SignatureCreateInput;
};

export type GeneratedTextWithSignatureDeleteFieldInput = {
  where?: InputMaybe<GeneratedTextWithSignatureConnectionWhere>;
};

export type GeneratedTextWithSignatureDisconnectFieldInput = {
  where?: InputMaybe<GeneratedTextWithSignatureConnectionWhere>;
};

export type GeneratedTextWithSignatureFieldInput = {
  connect?: InputMaybe<GeneratedTextWithSignatureConnectFieldInput>;
  create?: InputMaybe<GeneratedTextWithSignatureCreateFieldInput>;
};

export type GeneratedTextWithSignatureNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeneratedTextWithSignatureNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<GeneratedTextWithSignatureNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GeneratedTextWithSignatureNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tone_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tone_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  tone_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  tone_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tone_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tone_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  tone_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  tone_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tone_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tone_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  tone_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  tone_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tone_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tone_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  tone_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  tone_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  tone_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  tone_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tone_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  tone_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  tone_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  languageStyle_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  languageStyle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  languageStyle_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  languageStyle_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  languageStyle_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  languageStyle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  languageStyle_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  languageStyle_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  languageStyle_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  languageStyle_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  languageStyle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  languageStyle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  levelOfFormality_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  levelOfFormality_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  levelOfFormality_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  levelOfFormality_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  levelOfFormality_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  levelOfFormality_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  levelOfFormality_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  levelOfFormality_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  levelOfFormality_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  levelOfFormality_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  levelOfFormality_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  levelOfFormality_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  formsOfAddress_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  formsOfAddress_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  formsOfAddress_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  formsOfAddress_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  formsOfAddress_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  formsOfAddress_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  formsOfAddress_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  formsOfAddress_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  formsOfAddress_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  formsOfAddress_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  formsOfAddress_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  formsOfAddress_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emotionalAppeal_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  emotionalAppeal_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emotionalAppeal_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  emotionalAppeal_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emotionalAppeal_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  emotionalAppeal_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emotionalAppeal_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  emotionalAppeal_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  emotionalAppeal_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  emotionalAppeal_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  emotionalAppeal_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  emotionalAppeal_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GeneratedTextWithSignatureUpdateConnectionInput = {
  node?: InputMaybe<SignatureUpdateInput>;
};

export type GeneratedTextWithSignatureUpdateFieldInput = {
  where?: InputMaybe<GeneratedTextWithSignatureConnectionWhere>;
  connect?: InputMaybe<GeneratedTextWithSignatureConnectFieldInput>;
  disconnect?: InputMaybe<GeneratedTextWithSignatureDisconnectFieldInput>;
  create?: InputMaybe<GeneratedTextWithSignatureCreateFieldInput>;
  update?: InputMaybe<GeneratedTextWithSignatureUpdateConnectionInput>;
  delete?: InputMaybe<GeneratedTextWithSignatureDeleteFieldInput>;
};

export type SignatureConnectWhere = {
  node: SignatureWhere;
};

export type SignatureCreateInput = {
  title: Scalars["String"]["input"];
  tone: Scalars["String"]["input"];
  languageStyle: Scalars["String"]["input"];
  levelOfFormality: Scalars["String"]["input"];
  formsOfAddress: Scalars["String"]["input"];
  emotionalAppeal: Scalars["String"]["input"];
};

export type SignatureOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SignatureSort objects to sort Signatures by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SignatureSort>>;
};

/** Fields to sort Signatures by. The order in which sorts are applied is not guaranteed when specifying many fields in one SignatureSort object. */
export type SignatureSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  tone?: InputMaybe<SortDirection>;
  languageStyle?: InputMaybe<SortDirection>;
  levelOfFormality?: InputMaybe<SortDirection>;
  formsOfAddress?: InputMaybe<SortDirection>;
  emotionalAppeal?: InputMaybe<SortDirection>;
};

export type SignatureUpdateInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  tone?: InputMaybe<Scalars["String"]["input"]>;
  languageStyle?: InputMaybe<Scalars["String"]["input"]>;
  levelOfFormality?: InputMaybe<Scalars["String"]["input"]>;
  formsOfAddress?: InputMaybe<Scalars["String"]["input"]>;
  emotionalAppeal?: InputMaybe<Scalars["String"]["input"]>;
};

export type SignatureWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tone?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tone_NOT?: InputMaybe<Scalars["String"]["input"]>;
  tone_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tone_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tone_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  tone_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  tone_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tone_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tone_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  tone_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  languageStyle?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  languageStyle_NOT?: InputMaybe<Scalars["String"]["input"]>;
  languageStyle_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  languageStyle_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  languageStyle_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  languageStyle_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  languageStyle_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  languageStyle_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  languageStyle_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  languageStyle_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  levelOfFormality?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  levelOfFormality_NOT?: InputMaybe<Scalars["String"]["input"]>;
  levelOfFormality_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  levelOfFormality_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  levelOfFormality_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  levelOfFormality_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  levelOfFormality_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  levelOfFormality_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  levelOfFormality_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  levelOfFormality_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  formsOfAddress?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  formsOfAddress_NOT?: InputMaybe<Scalars["String"]["input"]>;
  formsOfAddress_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  formsOfAddress_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  formsOfAddress_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  formsOfAddress_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  formsOfAddress_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  formsOfAddress_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  formsOfAddress_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  formsOfAddress_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  emotionalAppeal?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emotionalAppeal_NOT?: InputMaybe<Scalars["String"]["input"]>;
  emotionalAppeal_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emotionalAppeal_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  emotionalAppeal_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  emotionalAppeal_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  emotionalAppeal_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emotionalAppeal_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emotionalAppeal_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emotionalAppeal_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<SignatureWhere>>;
  AND?: InputMaybe<Array<SignatureWhere>>;
  NOT?: InputMaybe<SignatureWhere>;
};

export interface SignatureAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  title?: boolean;
  tone?: boolean;
  languageStyle?: boolean;
  levelOfFormality?: boolean;
  formsOfAddress?: boolean;
  emotionalAppeal?: boolean;
}

export declare class SignatureModel {
  public find(args?: {
    where?: SignatureWhere;

    options?: SignatureOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Signature[]>;
  public create(args: {
    input: SignatureCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSignaturesMutationResponse>;
  public update(args: {
    where?: SignatureWhere;
    update?: SignatureUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSignaturesMutationResponse>;
  public delete(args: {
    where?: SignatureWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SignatureWhere;

    aggregate: SignatureAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SignatureAggregateSelection>;
}

export interface GeneratedTextAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  text?: boolean;
  generatedAt?: boolean;
  title?: boolean;
  goal?: boolean;
}

export declare class GeneratedTextModel {
  public find(args?: {
    where?: GeneratedTextWhere;

    options?: GeneratedTextOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<GeneratedText[]>;
  public create(args: {
    input: GeneratedTextCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateGeneratedTextsMutationResponse>;
  public update(args: {
    where?: GeneratedTextWhere;
    update?: GeneratedTextUpdateInput;
    connect?: GeneratedTextConnectInput;
    disconnect?: GeneratedTextDisconnectInput;
    create?: GeneratedTextCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateGeneratedTextsMutationResponse>;
  public delete(args: {
    where?: GeneratedTextWhere;
    delete?: GeneratedTextDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: GeneratedTextWhere;

    aggregate: GeneratedTextAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<GeneratedTextAggregateSelection>;
}

export interface ModelMap {
  Signature: SignatureModel;
  GeneratedText: GeneratedTextModel;
}
