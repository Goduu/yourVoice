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
  patients: Array<Patient>;
  patientsConnection: PatientsConnection;
  patientsAggregate: PatientAggregateSelection;
  vitalsObservations: Array<VitalsObservation>;
  vitalsObservationsConnection: VitalsObservationsConnection;
  vitalsObservationsAggregate: VitalsObservationAggregateSelection;
  medications: Array<Medication>;
  medicationsConnection: MedicationsConnection;
  medicationsAggregate: MedicationAggregateSelection;
  shiftSummaries: Array<ShiftSummary>;
  shiftSummariesConnection: ShiftSummariesConnection;
  shiftSummariesAggregate: ShiftSummaryAggregateSelection;
  nextShifts: Array<NextShift>;
  nextShiftsConnection: NextShiftsConnection;
  nextShiftsAggregate: NextShiftAggregateSelection;
};

export type QueryPatientsArgs = {
  where?: InputMaybe<PatientWhere>;
  options?: InputMaybe<PatientOptions>;
};

export type QueryPatientsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<PatientWhere>;
  sort?: InputMaybe<Array<InputMaybe<PatientSort>>>;
};

export type QueryPatientsAggregateArgs = {
  where?: InputMaybe<PatientWhere>;
};

export type QueryVitalsObservationsArgs = {
  where?: InputMaybe<VitalsObservationWhere>;
  options?: InputMaybe<VitalsObservationOptions>;
};

export type QueryVitalsObservationsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<VitalsObservationWhere>;
  sort?: InputMaybe<Array<InputMaybe<VitalsObservationSort>>>;
};

export type QueryVitalsObservationsAggregateArgs = {
  where?: InputMaybe<VitalsObservationWhere>;
};

export type QueryMedicationsArgs = {
  where?: InputMaybe<MedicationWhere>;
  options?: InputMaybe<MedicationOptions>;
};

export type QueryMedicationsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MedicationWhere>;
  sort?: InputMaybe<Array<InputMaybe<MedicationSort>>>;
};

export type QueryMedicationsAggregateArgs = {
  where?: InputMaybe<MedicationWhere>;
};

export type QueryShiftSummariesArgs = {
  where?: InputMaybe<ShiftSummaryWhere>;
  options?: InputMaybe<ShiftSummaryOptions>;
};

export type QueryShiftSummariesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ShiftSummaryWhere>;
  sort?: InputMaybe<Array<InputMaybe<ShiftSummarySort>>>;
};

export type QueryShiftSummariesAggregateArgs = {
  where?: InputMaybe<ShiftSummaryWhere>;
};

export type QueryNextShiftsArgs = {
  where?: InputMaybe<NextShiftWhere>;
  options?: InputMaybe<NextShiftOptions>;
};

export type QueryNextShiftsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<NextShiftWhere>;
  sort?: InputMaybe<Array<InputMaybe<NextShiftSort>>>;
};

export type QueryNextShiftsAggregateArgs = {
  where?: InputMaybe<NextShiftWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createPatients: CreatePatientsMutationResponse;
  deletePatients: DeleteInfo;
  updatePatients: UpdatePatientsMutationResponse;
  createVitalsObservations: CreateVitalsObservationsMutationResponse;
  deleteVitalsObservations: DeleteInfo;
  updateVitalsObservations: UpdateVitalsObservationsMutationResponse;
  createMedications: CreateMedicationsMutationResponse;
  deleteMedications: DeleteInfo;
  updateMedications: UpdateMedicationsMutationResponse;
  createShiftSummaries: CreateShiftSummariesMutationResponse;
  deleteShiftSummaries: DeleteInfo;
  updateShiftSummaries: UpdateShiftSummariesMutationResponse;
  createNextShifts: CreateNextShiftsMutationResponse;
  deleteNextShifts: DeleteInfo;
  updateNextShifts: UpdateNextShiftsMutationResponse;
};

export type MutationCreatePatientsArgs = {
  input: Array<PatientCreateInput>;
};

export type MutationDeletePatientsArgs = {
  where?: InputMaybe<PatientWhere>;
  delete?: InputMaybe<PatientDeleteInput>;
};

export type MutationUpdatePatientsArgs = {
  where?: InputMaybe<PatientWhere>;
  update?: InputMaybe<PatientUpdateInput>;
  connect?: InputMaybe<PatientConnectInput>;
  disconnect?: InputMaybe<PatientDisconnectInput>;
  create?: InputMaybe<PatientRelationInput>;
  delete?: InputMaybe<PatientDeleteInput>;
  connectOrCreate?: InputMaybe<PatientConnectOrCreateInput>;
};

export type MutationCreateVitalsObservationsArgs = {
  input: Array<VitalsObservationCreateInput>;
};

export type MutationDeleteVitalsObservationsArgs = {
  where?: InputMaybe<VitalsObservationWhere>;
};

export type MutationUpdateVitalsObservationsArgs = {
  where?: InputMaybe<VitalsObservationWhere>;
  update?: InputMaybe<VitalsObservationUpdateInput>;
};

export type MutationCreateMedicationsArgs = {
  input: Array<MedicationCreateInput>;
};

export type MutationDeleteMedicationsArgs = {
  where?: InputMaybe<MedicationWhere>;
};

export type MutationUpdateMedicationsArgs = {
  where?: InputMaybe<MedicationWhere>;
  update?: InputMaybe<MedicationUpdateInput>;
};

export type MutationCreateShiftSummariesArgs = {
  input: Array<ShiftSummaryCreateInput>;
};

export type MutationDeleteShiftSummariesArgs = {
  where?: InputMaybe<ShiftSummaryWhere>;
};

export type MutationUpdateShiftSummariesArgs = {
  where?: InputMaybe<ShiftSummaryWhere>;
  update?: InputMaybe<ShiftSummaryUpdateInput>;
};

export type MutationCreateNextShiftsArgs = {
  input: Array<NextShiftCreateInput>;
};

export type MutationDeleteNextShiftsArgs = {
  where?: InputMaybe<NextShiftWhere>;
};

export type MutationUpdateNextShiftsArgs = {
  where?: InputMaybe<NextShiftWhere>;
  update?: InputMaybe<NextShiftUpdateInput>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateMedicationsMutationResponse = {
  __typename?: "CreateMedicationsMutationResponse";
  info: CreateInfo;
  medications: Array<Medication>;
};

export type CreateNextShiftsMutationResponse = {
  __typename?: "CreateNextShiftsMutationResponse";
  info: CreateInfo;
  nextShifts: Array<NextShift>;
};

export type CreatePatientsMutationResponse = {
  __typename?: "CreatePatientsMutationResponse";
  info: CreateInfo;
  patients: Array<Patient>;
};

export type CreateShiftSummariesMutationResponse = {
  __typename?: "CreateShiftSummariesMutationResponse";
  info: CreateInfo;
  shiftSummaries: Array<ShiftSummary>;
};

export type CreateVitalsObservationsMutationResponse = {
  __typename?: "CreateVitalsObservationsMutationResponse";
  info: CreateInfo;
  vitalsObservations: Array<VitalsObservation>;
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

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

export type IntAggregateSelection = {
  __typename?: "IntAggregateSelection";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

export type Medication = {
  __typename?: "Medication";
  id?: Maybe<Scalars["ID"]["output"]>;
  name: Scalars["String"]["output"];
};

export type MedicationAggregateSelection = {
  __typename?: "MedicationAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type MedicationEdge = {
  __typename?: "MedicationEdge";
  cursor: Scalars["String"]["output"];
  node: Medication;
};

export type MedicationsConnection = {
  __typename?: "MedicationsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MedicationEdge>;
};

export type NextShift = {
  __typename?: "NextShift";
  id?: Maybe<Scalars["ID"]["output"]>;
  note: Scalars["String"]["output"];
  date: Scalars["DateTime"]["output"];
};

export type NextShiftAggregateSelection = {
  __typename?: "NextShiftAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  note: StringAggregateSelection;
  date: DateTimeAggregateSelection;
};

export type NextShiftEdge = {
  __typename?: "NextShiftEdge";
  cursor: Scalars["String"]["output"];
  node: NextShift;
};

export type NextShiftsConnection = {
  __typename?: "NextShiftsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<NextShiftEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Patient = {
  __typename?: "Patient";
  id?: Maybe<Scalars["ID"]["output"]>;
  name: Scalars["String"]["output"];
  age: Scalars["Int"]["output"];
  allergies: Array<Scalars["String"]["output"]>;
  takenMedicationAggregate?: Maybe<PatientMedicationTakenMedicationAggregationSelection>;
  takenMedication: Array<Medication>;
  takenMedicationConnection: PatientTakenMedicationConnection;
  hasObservationAggregate?: Maybe<PatientVitalsObservationHasObservationAggregationSelection>;
  hasObservation: Array<VitalsObservation>;
  hasObservationConnection: PatientHasObservationConnection;
  hasShiftSummaryAggregate?: Maybe<PatientShiftSummaryHasShiftSummaryAggregationSelection>;
  hasShiftSummary: Array<ShiftSummary>;
  hasShiftSummaryConnection: PatientHasShiftSummaryConnection;
  hasNextShiftAggregate?: Maybe<PatientNextShiftHasNextShiftAggregationSelection>;
  hasNextShift: Array<NextShift>;
  hasNextShiftConnection: PatientHasNextShiftConnection;
};

export type PatientTakenMedicationAggregateArgs = {
  where?: InputMaybe<MedicationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientTakenMedicationArgs = {
  where?: InputMaybe<MedicationWhere>;
  options?: InputMaybe<MedicationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientTakenMedicationConnectionArgs = {
  where?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PatientTakenMedicationConnectionSort>>;
};

export type PatientHasObservationAggregateArgs = {
  where?: InputMaybe<VitalsObservationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientHasObservationArgs = {
  where?: InputMaybe<VitalsObservationWhere>;
  options?: InputMaybe<VitalsObservationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientHasObservationConnectionArgs = {
  where?: InputMaybe<PatientHasObservationConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PatientHasObservationConnectionSort>>;
};

export type PatientHasShiftSummaryAggregateArgs = {
  where?: InputMaybe<ShiftSummaryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientHasShiftSummaryArgs = {
  where?: InputMaybe<ShiftSummaryWhere>;
  options?: InputMaybe<ShiftSummaryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientHasShiftSummaryConnectionArgs = {
  where?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PatientHasShiftSummaryConnectionSort>>;
};

export type PatientHasNextShiftAggregateArgs = {
  where?: InputMaybe<NextShiftWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientHasNextShiftArgs = {
  where?: InputMaybe<NextShiftWhere>;
  options?: InputMaybe<NextShiftOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientHasNextShiftConnectionArgs = {
  where?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<PatientHasNextShiftConnectionSort>>;
};

export type PatientAggregateSelection = {
  __typename?: "PatientAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  age: IntAggregateSelection;
};

export type PatientEdge = {
  __typename?: "PatientEdge";
  cursor: Scalars["String"]["output"];
  node: Patient;
};

export type PatientHasNextShiftConnection = {
  __typename?: "PatientHasNextShiftConnection";
  edges: Array<PatientHasNextShiftRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PatientHasNextShiftRelationship = {
  __typename?: "PatientHasNextShiftRelationship";
  cursor: Scalars["String"]["output"];
  node: NextShift;
};

export type PatientHasObservationConnection = {
  __typename?: "PatientHasObservationConnection";
  edges: Array<PatientHasObservationRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PatientHasObservationRelationship = {
  __typename?: "PatientHasObservationRelationship";
  cursor: Scalars["String"]["output"];
  node: VitalsObservation;
};

export type PatientHasShiftSummaryConnection = {
  __typename?: "PatientHasShiftSummaryConnection";
  edges: Array<PatientHasShiftSummaryRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PatientHasShiftSummaryRelationship = {
  __typename?: "PatientHasShiftSummaryRelationship";
  cursor: Scalars["String"]["output"];
  node: ShiftSummary;
};

export type PatientMedicationTakenMedicationAggregationSelection = {
  __typename?: "PatientMedicationTakenMedicationAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PatientMedicationTakenMedicationNodeAggregateSelection>;
  edge?: Maybe<PatientMedicationTakenMedicationEdgeAggregateSelection>;
};

export type PatientMedicationTakenMedicationEdgeAggregateSelection = {
  __typename?: "PatientMedicationTakenMedicationEdgeAggregateSelection";
  at: StringAggregateSelection;
};

export type PatientMedicationTakenMedicationNodeAggregateSelection = {
  __typename?: "PatientMedicationTakenMedicationNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type PatientNextShiftHasNextShiftAggregationSelection = {
  __typename?: "PatientNextShiftHasNextShiftAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PatientNextShiftHasNextShiftNodeAggregateSelection>;
};

export type PatientNextShiftHasNextShiftNodeAggregateSelection = {
  __typename?: "PatientNextShiftHasNextShiftNodeAggregateSelection";
  id: IdAggregateSelection;
  note: StringAggregateSelection;
  date: DateTimeAggregateSelection;
};

export type PatientsConnection = {
  __typename?: "PatientsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<PatientEdge>;
};

export type PatientShiftSummaryHasShiftSummaryAggregationSelection = {
  __typename?: "PatientShiftSummaryHasShiftSummaryAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PatientShiftSummaryHasShiftSummaryNodeAggregateSelection>;
};

export type PatientShiftSummaryHasShiftSummaryNodeAggregateSelection = {
  __typename?: "PatientShiftSummaryHasShiftSummaryNodeAggregateSelection";
  id: IdAggregateSelection;
  note: StringAggregateSelection;
  date: DateTimeAggregateSelection;
};

export type PatientTakenMedicationConnection = {
  __typename?: "PatientTakenMedicationConnection";
  edges: Array<PatientTakenMedicationRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type PatientTakenMedicationRelationship = {
  __typename?: "PatientTakenMedicationRelationship";
  cursor: Scalars["String"]["output"];
  node: Medication;
  properties: Taken;
};

export type PatientVitalsObservationHasObservationAggregationSelection = {
  __typename?: "PatientVitalsObservationHasObservationAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<PatientVitalsObservationHasObservationNodeAggregateSelection>;
};

export type PatientVitalsObservationHasObservationNodeAggregateSelection = {
  __typename?: "PatientVitalsObservationHasObservationNodeAggregateSelection";
  id: IdAggregateSelection;
  temperature: StringAggregateSelection;
  bloodPressure: StringAggregateSelection;
  heartRate: IntAggregateSelection;
  respiratoryRate: IntAggregateSelection;
  mentalStatus: StringAggregateSelection;
  painLevel: IntAggregateSelection;
  painLocation: StringAggregateSelection;
  painResponse: StringAggregateSelection;
  observationDate: DateTimeAggregateSelection;
};

export type ShiftSummariesConnection = {
  __typename?: "ShiftSummariesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ShiftSummaryEdge>;
};

export type ShiftSummary = {
  __typename?: "ShiftSummary";
  id?: Maybe<Scalars["ID"]["output"]>;
  note: Scalars["String"]["output"];
  date: Scalars["DateTime"]["output"];
};

export type ShiftSummaryAggregateSelection = {
  __typename?: "ShiftSummaryAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  note: StringAggregateSelection;
  date: DateTimeAggregateSelection;
};

export type ShiftSummaryEdge = {
  __typename?: "ShiftSummaryEdge";
  cursor: Scalars["String"]["output"];
  node: ShiftSummary;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

/**
 * The edge properties for the following fields:
 * * Patient.takenMedication
 */
export type Taken = {
  __typename?: "Taken";
  at: Scalars["String"]["output"];
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

export type UpdateMedicationsMutationResponse = {
  __typename?: "UpdateMedicationsMutationResponse";
  info: UpdateInfo;
  medications: Array<Medication>;
};

export type UpdateNextShiftsMutationResponse = {
  __typename?: "UpdateNextShiftsMutationResponse";
  info: UpdateInfo;
  nextShifts: Array<NextShift>;
};

export type UpdatePatientsMutationResponse = {
  __typename?: "UpdatePatientsMutationResponse";
  info: UpdateInfo;
  patients: Array<Patient>;
};

export type UpdateShiftSummariesMutationResponse = {
  __typename?: "UpdateShiftSummariesMutationResponse";
  info: UpdateInfo;
  shiftSummaries: Array<ShiftSummary>;
};

export type UpdateVitalsObservationsMutationResponse = {
  __typename?: "UpdateVitalsObservationsMutationResponse";
  info: UpdateInfo;
  vitalsObservations: Array<VitalsObservation>;
};

export type VitalsObservation = {
  __typename?: "VitalsObservation";
  id?: Maybe<Scalars["ID"]["output"]>;
  temperature: Scalars["String"]["output"];
  bloodPressure?: Maybe<Scalars["String"]["output"]>;
  heartRate?: Maybe<Scalars["Int"]["output"]>;
  respiratoryRate?: Maybe<Scalars["Int"]["output"]>;
  mentalStatus?: Maybe<Scalars["String"]["output"]>;
  painLevel?: Maybe<Scalars["Int"]["output"]>;
  painLocation?: Maybe<Scalars["String"]["output"]>;
  painResponse?: Maybe<Scalars["String"]["output"]>;
  observationDate?: Maybe<Scalars["DateTime"]["output"]>;
};

export type VitalsObservationAggregateSelection = {
  __typename?: "VitalsObservationAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  temperature: StringAggregateSelection;
  bloodPressure: StringAggregateSelection;
  heartRate: IntAggregateSelection;
  respiratoryRate: IntAggregateSelection;
  mentalStatus: StringAggregateSelection;
  painLevel: IntAggregateSelection;
  painLocation: StringAggregateSelection;
  painResponse: StringAggregateSelection;
  observationDate: DateTimeAggregateSelection;
};

export type VitalsObservationEdge = {
  __typename?: "VitalsObservationEdge";
  cursor: Scalars["String"]["output"];
  node: VitalsObservation;
};

export type VitalsObservationsConnection = {
  __typename?: "VitalsObservationsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<VitalsObservationEdge>;
};

export type MedicationConnectOrCreateWhere = {
  node: MedicationUniqueWhere;
};

export type MedicationConnectWhere = {
  node: MedicationWhere;
};

export type MedicationCreateInput = {
  name: Scalars["String"]["input"];
};

export type MedicationOnCreateInput = {
  name: Scalars["String"]["input"];
};

export type MedicationOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MedicationSort objects to sort Medications by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MedicationSort>>;
};

/** Fields to sort Medications by. The order in which sorts are applied is not guaranteed when specifying many fields in one MedicationSort object. */
export type MedicationSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type MedicationUniqueWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MedicationUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MedicationWhere = {
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
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<MedicationWhere>>;
  AND?: InputMaybe<Array<MedicationWhere>>;
  NOT?: InputMaybe<MedicationWhere>;
};

export type NextShiftConnectWhere = {
  node: NextShiftWhere;
};

export type NextShiftCreateInput = {
  note: Scalars["String"]["input"];
  date: Scalars["DateTime"]["input"];
};

export type NextShiftOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more NextShiftSort objects to sort NextShifts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<NextShiftSort>>;
};

/** Fields to sort NextShifts by. The order in which sorts are applied is not guaranteed when specifying many fields in one NextShiftSort object. */
export type NextShiftSort = {
  id?: InputMaybe<SortDirection>;
  note?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
};

export type NextShiftUpdateInput = {
  note?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NextShiftWhere = {
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
  note?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT?: InputMaybe<Scalars["String"]["input"]>;
  note_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  note_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  note_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  note_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  date_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<NextShiftWhere>>;
  AND?: InputMaybe<Array<NextShiftWhere>>;
  NOT?: InputMaybe<NextShiftWhere>;
};

export type PatientConnectInput = {
  takenMedication?: InputMaybe<Array<PatientTakenMedicationConnectFieldInput>>;
  hasObservation?: InputMaybe<Array<PatientHasObservationConnectFieldInput>>;
  hasShiftSummary?: InputMaybe<Array<PatientHasShiftSummaryConnectFieldInput>>;
  hasNextShift?: InputMaybe<Array<PatientHasNextShiftConnectFieldInput>>;
};

export type PatientConnectOrCreateInput = {
  takenMedication?: InputMaybe<
    Array<PatientTakenMedicationConnectOrCreateFieldInput>
  >;
};

export type PatientCreateInput = {
  name: Scalars["String"]["input"];
  age: Scalars["Int"]["input"];
  allergies: Array<Scalars["String"]["input"]>;
  takenMedication?: InputMaybe<PatientTakenMedicationFieldInput>;
  hasObservation?: InputMaybe<PatientHasObservationFieldInput>;
  hasShiftSummary?: InputMaybe<PatientHasShiftSummaryFieldInput>;
  hasNextShift?: InputMaybe<PatientHasNextShiftFieldInput>;
};

export type PatientDeleteInput = {
  takenMedication?: InputMaybe<Array<PatientTakenMedicationDeleteFieldInput>>;
  hasObservation?: InputMaybe<Array<PatientHasObservationDeleteFieldInput>>;
  hasShiftSummary?: InputMaybe<Array<PatientHasShiftSummaryDeleteFieldInput>>;
  hasNextShift?: InputMaybe<Array<PatientHasNextShiftDeleteFieldInput>>;
};

export type PatientDisconnectInput = {
  takenMedication?: InputMaybe<
    Array<PatientTakenMedicationDisconnectFieldInput>
  >;
  hasObservation?: InputMaybe<Array<PatientHasObservationDisconnectFieldInput>>;
  hasShiftSummary?: InputMaybe<
    Array<PatientHasShiftSummaryDisconnectFieldInput>
  >;
  hasNextShift?: InputMaybe<Array<PatientHasNextShiftDisconnectFieldInput>>;
};

export type PatientHasNextShiftAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PatientHasNextShiftAggregateInput>>;
  OR?: InputMaybe<Array<PatientHasNextShiftAggregateInput>>;
  NOT?: InputMaybe<PatientHasNextShiftAggregateInput>;
  node?: InputMaybe<PatientHasNextShiftNodeAggregationWhereInput>;
};

export type PatientHasNextShiftConnectFieldInput = {
  where?: InputMaybe<NextShiftConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type PatientHasNextShiftConnectionSort = {
  node?: InputMaybe<NextShiftSort>;
};

export type PatientHasNextShiftConnectionWhere = {
  AND?: InputMaybe<Array<PatientHasNextShiftConnectionWhere>>;
  OR?: InputMaybe<Array<PatientHasNextShiftConnectionWhere>>;
  NOT?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  node?: InputMaybe<NextShiftWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<NextShiftWhere>;
};

export type PatientHasNextShiftCreateFieldInput = {
  node: NextShiftCreateInput;
};

export type PatientHasNextShiftDeleteFieldInput = {
  where?: InputMaybe<PatientHasNextShiftConnectionWhere>;
};

export type PatientHasNextShiftDisconnectFieldInput = {
  where?: InputMaybe<PatientHasNextShiftConnectionWhere>;
};

export type PatientHasNextShiftFieldInput = {
  connect?: InputMaybe<Array<PatientHasNextShiftConnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasNextShiftCreateFieldInput>>;
};

export type PatientHasNextShiftNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientHasNextShiftNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PatientHasNextShiftNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PatientHasNextShiftNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PatientHasNextShiftUpdateConnectionInput = {
  node?: InputMaybe<NextShiftUpdateInput>;
};

export type PatientHasNextShiftUpdateFieldInput = {
  where?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  connect?: InputMaybe<Array<PatientHasNextShiftConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PatientHasNextShiftDisconnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasNextShiftCreateFieldInput>>;
  update?: InputMaybe<PatientHasNextShiftUpdateConnectionInput>;
  delete?: InputMaybe<Array<PatientHasNextShiftDeleteFieldInput>>;
};

export type PatientHasObservationAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PatientHasObservationAggregateInput>>;
  OR?: InputMaybe<Array<PatientHasObservationAggregateInput>>;
  NOT?: InputMaybe<PatientHasObservationAggregateInput>;
  node?: InputMaybe<PatientHasObservationNodeAggregationWhereInput>;
};

export type PatientHasObservationConnectFieldInput = {
  where?: InputMaybe<VitalsObservationConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type PatientHasObservationConnectionSort = {
  node?: InputMaybe<VitalsObservationSort>;
};

export type PatientHasObservationConnectionWhere = {
  AND?: InputMaybe<Array<PatientHasObservationConnectionWhere>>;
  OR?: InputMaybe<Array<PatientHasObservationConnectionWhere>>;
  NOT?: InputMaybe<PatientHasObservationConnectionWhere>;
  node?: InputMaybe<VitalsObservationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<VitalsObservationWhere>;
};

export type PatientHasObservationCreateFieldInput = {
  node: VitalsObservationCreateInput;
};

export type PatientHasObservationDeleteFieldInput = {
  where?: InputMaybe<PatientHasObservationConnectionWhere>;
};

export type PatientHasObservationDisconnectFieldInput = {
  where?: InputMaybe<PatientHasObservationConnectionWhere>;
};

export type PatientHasObservationFieldInput = {
  connect?: InputMaybe<Array<PatientHasObservationConnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasObservationCreateFieldInput>>;
};

export type PatientHasObservationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientHasObservationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PatientHasObservationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PatientHasObservationNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  temperature_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  temperature_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  temperature_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  temperature_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  temperature_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  temperature_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  temperature_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  temperature_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  temperature_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  temperature_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  temperature_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  temperature_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bloodPressure_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  bloodPressure_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bloodPressure_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  bloodPressure_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bloodPressure_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  bloodPressure_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bloodPressure_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  bloodPressure_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  bloodPressure_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  bloodPressure_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  bloodPressure_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  bloodPressure_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  heartRate_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  heartRate_GT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  heartRate_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  heartRate_LT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  heartRate_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  respiratoryRate_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  respiratoryRate_GT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  respiratoryRate_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  respiratoryRate_LT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  respiratoryRate_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mentalStatus_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mentalStatus_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mentalStatus_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mentalStatus_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mentalStatus_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mentalStatus_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mentalStatus_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mentalStatus_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  mentalStatus_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  mentalStatus_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mentalStatus_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLevel_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLevel_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLevel_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLevel_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLevel_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLocation_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  painLocation_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLocation_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  painLocation_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLocation_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  painLocation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLocation_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  painLocation_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painLocation_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painLocation_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  painLocation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painResponse_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  painResponse_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painResponse_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  painResponse_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painResponse_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  painResponse_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painResponse_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  painResponse_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  painResponse_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  painResponse_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  painResponse_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painResponse_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  observationDate_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  observationDate_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  observationDate_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  observationDate_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  observationDate_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PatientHasObservationUpdateConnectionInput = {
  node?: InputMaybe<VitalsObservationUpdateInput>;
};

export type PatientHasObservationUpdateFieldInput = {
  where?: InputMaybe<PatientHasObservationConnectionWhere>;
  connect?: InputMaybe<Array<PatientHasObservationConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PatientHasObservationDisconnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasObservationCreateFieldInput>>;
  update?: InputMaybe<PatientHasObservationUpdateConnectionInput>;
  delete?: InputMaybe<Array<PatientHasObservationDeleteFieldInput>>;
};

export type PatientHasShiftSummaryAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PatientHasShiftSummaryAggregateInput>>;
  OR?: InputMaybe<Array<PatientHasShiftSummaryAggregateInput>>;
  NOT?: InputMaybe<PatientHasShiftSummaryAggregateInput>;
  node?: InputMaybe<PatientHasShiftSummaryNodeAggregationWhereInput>;
};

export type PatientHasShiftSummaryConnectFieldInput = {
  where?: InputMaybe<ShiftSummaryConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type PatientHasShiftSummaryConnectionSort = {
  node?: InputMaybe<ShiftSummarySort>;
};

export type PatientHasShiftSummaryConnectionWhere = {
  AND?: InputMaybe<Array<PatientHasShiftSummaryConnectionWhere>>;
  OR?: InputMaybe<Array<PatientHasShiftSummaryConnectionWhere>>;
  NOT?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  node?: InputMaybe<ShiftSummaryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ShiftSummaryWhere>;
};

export type PatientHasShiftSummaryCreateFieldInput = {
  node: ShiftSummaryCreateInput;
};

export type PatientHasShiftSummaryDeleteFieldInput = {
  where?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
};

export type PatientHasShiftSummaryDisconnectFieldInput = {
  where?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
};

export type PatientHasShiftSummaryFieldInput = {
  connect?: InputMaybe<Array<PatientHasShiftSummaryConnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasShiftSummaryCreateFieldInput>>;
};

export type PatientHasShiftSummaryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientHasShiftSummaryNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PatientHasShiftSummaryNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PatientHasShiftSummaryNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  note_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  note_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  note_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  note_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  date_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PatientHasShiftSummaryUpdateConnectionInput = {
  node?: InputMaybe<ShiftSummaryUpdateInput>;
};

export type PatientHasShiftSummaryUpdateFieldInput = {
  where?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  connect?: InputMaybe<Array<PatientHasShiftSummaryConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PatientHasShiftSummaryDisconnectFieldInput>>;
  create?: InputMaybe<Array<PatientHasShiftSummaryCreateFieldInput>>;
  update?: InputMaybe<PatientHasShiftSummaryUpdateConnectionInput>;
  delete?: InputMaybe<Array<PatientHasShiftSummaryDeleteFieldInput>>;
};

export type PatientOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more PatientSort objects to sort Patients by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PatientSort>>;
};

export type PatientRelationInput = {
  takenMedication?: InputMaybe<Array<PatientTakenMedicationCreateFieldInput>>;
  hasObservation?: InputMaybe<Array<PatientHasObservationCreateFieldInput>>;
  hasShiftSummary?: InputMaybe<Array<PatientHasShiftSummaryCreateFieldInput>>;
  hasNextShift?: InputMaybe<Array<PatientHasNextShiftCreateFieldInput>>;
};

/** Fields to sort Patients by. The order in which sorts are applied is not guaranteed when specifying many fields in one PatientSort object. */
export type PatientSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  age?: InputMaybe<SortDirection>;
};

export type PatientTakenMedicationAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<PatientTakenMedicationAggregateInput>>;
  OR?: InputMaybe<Array<PatientTakenMedicationAggregateInput>>;
  NOT?: InputMaybe<PatientTakenMedicationAggregateInput>;
  node?: InputMaybe<PatientTakenMedicationNodeAggregationWhereInput>;
  edge?: InputMaybe<TakenAggregationWhereInput>;
};

export type PatientTakenMedicationConnectFieldInput = {
  edge: TakenCreateInput;
  where?: InputMaybe<MedicationConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type PatientTakenMedicationConnectionSort = {
  node?: InputMaybe<MedicationSort>;
  edge?: InputMaybe<TakenSort>;
};

export type PatientTakenMedicationConnectionWhere = {
  AND?: InputMaybe<Array<PatientTakenMedicationConnectionWhere>>;
  OR?: InputMaybe<Array<PatientTakenMedicationConnectionWhere>>;
  NOT?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  node?: InputMaybe<MedicationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MedicationWhere>;
  edge?: InputMaybe<TakenWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<TakenWhere>;
};

export type PatientTakenMedicationConnectOrCreateFieldInput = {
  where: MedicationConnectOrCreateWhere;
  onCreate: PatientTakenMedicationConnectOrCreateFieldInputOnCreate;
};

export type PatientTakenMedicationConnectOrCreateFieldInputOnCreate = {
  node: MedicationOnCreateInput;
  edge: TakenCreateInput;
};

export type PatientTakenMedicationCreateFieldInput = {
  edge: TakenCreateInput;
  node: MedicationCreateInput;
};

export type PatientTakenMedicationDeleteFieldInput = {
  where?: InputMaybe<PatientTakenMedicationConnectionWhere>;
};

export type PatientTakenMedicationDisconnectFieldInput = {
  where?: InputMaybe<PatientTakenMedicationConnectionWhere>;
};

export type PatientTakenMedicationFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<PatientTakenMedicationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PatientTakenMedicationConnectFieldInput>>;
  create?: InputMaybe<Array<PatientTakenMedicationCreateFieldInput>>;
};

export type PatientTakenMedicationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PatientTakenMedicationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PatientTakenMedicationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PatientTakenMedicationNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PatientTakenMedicationUpdateConnectionInput = {
  node?: InputMaybe<MedicationUpdateInput>;
  edge?: InputMaybe<TakenUpdateInput>;
};

export type PatientTakenMedicationUpdateFieldInput = {
  where?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<PatientTakenMedicationConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<PatientTakenMedicationConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PatientTakenMedicationDisconnectFieldInput>>;
  create?: InputMaybe<Array<PatientTakenMedicationCreateFieldInput>>;
  update?: InputMaybe<PatientTakenMedicationUpdateConnectionInput>;
  delete?: InputMaybe<Array<PatientTakenMedicationDeleteFieldInput>>;
};

export type PatientUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  age?: InputMaybe<Scalars["Int"]["input"]>;
  age_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  age_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  allergies?: InputMaybe<Array<Scalars["String"]["input"]>>;
  allergies_POP?: InputMaybe<Scalars["Int"]["input"]>;
  allergies_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>;
  takenMedication?: InputMaybe<Array<PatientTakenMedicationUpdateFieldInput>>;
  hasObservation?: InputMaybe<Array<PatientHasObservationUpdateFieldInput>>;
  hasShiftSummary?: InputMaybe<Array<PatientHasShiftSummaryUpdateFieldInput>>;
  hasNextShift?: InputMaybe<Array<PatientHasNextShiftUpdateFieldInput>>;
};

export type PatientWhere = {
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
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  age?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  age_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  age_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  age_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  age_LT?: InputMaybe<Scalars["Int"]["input"]>;
  age_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  age_GT?: InputMaybe<Scalars["Int"]["input"]>;
  age_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  allergies?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  allergies_NOT?: InputMaybe<Array<Scalars["String"]["input"]>>;
  allergies_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  allergies_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<PatientWhere>>;
  AND?: InputMaybe<Array<PatientWhere>>;
  NOT?: InputMaybe<PatientWhere>;
  /** @deprecated Use `takenMedication_SOME` instead. */
  takenMedication?: InputMaybe<MedicationWhere>;
  /** @deprecated Use `takenMedication_NONE` instead. */
  takenMedication_NOT?: InputMaybe<MedicationWhere>;
  /** Return Patients where all of the related Medications match this filter */
  takenMedication_ALL?: InputMaybe<MedicationWhere>;
  /** Return Patients where none of the related Medications match this filter */
  takenMedication_NONE?: InputMaybe<MedicationWhere>;
  /** Return Patients where one of the related Medications match this filter */
  takenMedication_SINGLE?: InputMaybe<MedicationWhere>;
  /** Return Patients where some of the related Medications match this filter */
  takenMedication_SOME?: InputMaybe<MedicationWhere>;
  /** @deprecated Use `takenMedicationConnection_SOME` instead. */
  takenMedicationConnection?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  /** @deprecated Use `takenMedicationConnection_NONE` instead. */
  takenMedicationConnection_NOT?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  /** Return Patients where all of the related PatientTakenMedicationConnections match this filter */
  takenMedicationConnection_ALL?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  /** Return Patients where none of the related PatientTakenMedicationConnections match this filter */
  takenMedicationConnection_NONE?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  /** Return Patients where one of the related PatientTakenMedicationConnections match this filter */
  takenMedicationConnection_SINGLE?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  /** Return Patients where some of the related PatientTakenMedicationConnections match this filter */
  takenMedicationConnection_SOME?: InputMaybe<PatientTakenMedicationConnectionWhere>;
  takenMedicationAggregate?: InputMaybe<PatientTakenMedicationAggregateInput>;
  /** @deprecated Use `hasObservation_SOME` instead. */
  hasObservation?: InputMaybe<VitalsObservationWhere>;
  /** @deprecated Use `hasObservation_NONE` instead. */
  hasObservation_NOT?: InputMaybe<VitalsObservationWhere>;
  /** Return Patients where all of the related VitalsObservations match this filter */
  hasObservation_ALL?: InputMaybe<VitalsObservationWhere>;
  /** Return Patients where none of the related VitalsObservations match this filter */
  hasObservation_NONE?: InputMaybe<VitalsObservationWhere>;
  /** Return Patients where one of the related VitalsObservations match this filter */
  hasObservation_SINGLE?: InputMaybe<VitalsObservationWhere>;
  /** Return Patients where some of the related VitalsObservations match this filter */
  hasObservation_SOME?: InputMaybe<VitalsObservationWhere>;
  /** @deprecated Use `hasObservationConnection_SOME` instead. */
  hasObservationConnection?: InputMaybe<PatientHasObservationConnectionWhere>;
  /** @deprecated Use `hasObservationConnection_NONE` instead. */
  hasObservationConnection_NOT?: InputMaybe<PatientHasObservationConnectionWhere>;
  /** Return Patients where all of the related PatientHasObservationConnections match this filter */
  hasObservationConnection_ALL?: InputMaybe<PatientHasObservationConnectionWhere>;
  /** Return Patients where none of the related PatientHasObservationConnections match this filter */
  hasObservationConnection_NONE?: InputMaybe<PatientHasObservationConnectionWhere>;
  /** Return Patients where one of the related PatientHasObservationConnections match this filter */
  hasObservationConnection_SINGLE?: InputMaybe<PatientHasObservationConnectionWhere>;
  /** Return Patients where some of the related PatientHasObservationConnections match this filter */
  hasObservationConnection_SOME?: InputMaybe<PatientHasObservationConnectionWhere>;
  hasObservationAggregate?: InputMaybe<PatientHasObservationAggregateInput>;
  /** @deprecated Use `hasShiftSummary_SOME` instead. */
  hasShiftSummary?: InputMaybe<ShiftSummaryWhere>;
  /** @deprecated Use `hasShiftSummary_NONE` instead. */
  hasShiftSummary_NOT?: InputMaybe<ShiftSummaryWhere>;
  /** Return Patients where all of the related ShiftSummaries match this filter */
  hasShiftSummary_ALL?: InputMaybe<ShiftSummaryWhere>;
  /** Return Patients where none of the related ShiftSummaries match this filter */
  hasShiftSummary_NONE?: InputMaybe<ShiftSummaryWhere>;
  /** Return Patients where one of the related ShiftSummaries match this filter */
  hasShiftSummary_SINGLE?: InputMaybe<ShiftSummaryWhere>;
  /** Return Patients where some of the related ShiftSummaries match this filter */
  hasShiftSummary_SOME?: InputMaybe<ShiftSummaryWhere>;
  /** @deprecated Use `hasShiftSummaryConnection_SOME` instead. */
  hasShiftSummaryConnection?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  /** @deprecated Use `hasShiftSummaryConnection_NONE` instead. */
  hasShiftSummaryConnection_NOT?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  /** Return Patients where all of the related PatientHasShiftSummaryConnections match this filter */
  hasShiftSummaryConnection_ALL?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  /** Return Patients where none of the related PatientHasShiftSummaryConnections match this filter */
  hasShiftSummaryConnection_NONE?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  /** Return Patients where one of the related PatientHasShiftSummaryConnections match this filter */
  hasShiftSummaryConnection_SINGLE?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  /** Return Patients where some of the related PatientHasShiftSummaryConnections match this filter */
  hasShiftSummaryConnection_SOME?: InputMaybe<PatientHasShiftSummaryConnectionWhere>;
  hasShiftSummaryAggregate?: InputMaybe<PatientHasShiftSummaryAggregateInput>;
  /** @deprecated Use `hasNextShift_SOME` instead. */
  hasNextShift?: InputMaybe<NextShiftWhere>;
  /** @deprecated Use `hasNextShift_NONE` instead. */
  hasNextShift_NOT?: InputMaybe<NextShiftWhere>;
  /** Return Patients where all of the related NextShifts match this filter */
  hasNextShift_ALL?: InputMaybe<NextShiftWhere>;
  /** Return Patients where none of the related NextShifts match this filter */
  hasNextShift_NONE?: InputMaybe<NextShiftWhere>;
  /** Return Patients where one of the related NextShifts match this filter */
  hasNextShift_SINGLE?: InputMaybe<NextShiftWhere>;
  /** Return Patients where some of the related NextShifts match this filter */
  hasNextShift_SOME?: InputMaybe<NextShiftWhere>;
  /** @deprecated Use `hasNextShiftConnection_SOME` instead. */
  hasNextShiftConnection?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  /** @deprecated Use `hasNextShiftConnection_NONE` instead. */
  hasNextShiftConnection_NOT?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  /** Return Patients where all of the related PatientHasNextShiftConnections match this filter */
  hasNextShiftConnection_ALL?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  /** Return Patients where none of the related PatientHasNextShiftConnections match this filter */
  hasNextShiftConnection_NONE?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  /** Return Patients where one of the related PatientHasNextShiftConnections match this filter */
  hasNextShiftConnection_SINGLE?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  /** Return Patients where some of the related PatientHasNextShiftConnections match this filter */
  hasNextShiftConnection_SOME?: InputMaybe<PatientHasNextShiftConnectionWhere>;
  hasNextShiftAggregate?: InputMaybe<PatientHasNextShiftAggregateInput>;
};

export type ShiftSummaryConnectWhere = {
  node: ShiftSummaryWhere;
};

export type ShiftSummaryCreateInput = {
  note: Scalars["String"]["input"];
  date: Scalars["DateTime"]["input"];
};

export type ShiftSummaryOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ShiftSummarySort objects to sort ShiftSummaries by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ShiftSummarySort>>;
};

/** Fields to sort ShiftSummaries by. The order in which sorts are applied is not guaranteed when specifying many fields in one ShiftSummarySort object. */
export type ShiftSummarySort = {
  id?: InputMaybe<SortDirection>;
  note?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
};

export type ShiftSummaryUpdateInput = {
  note?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ShiftSummaryWhere = {
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
  note?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT?: InputMaybe<Scalars["String"]["input"]>;
  note_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  note_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  note_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  note_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  note_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  date_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  date_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  date_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<ShiftSummaryWhere>>;
  AND?: InputMaybe<Array<ShiftSummaryWhere>>;
  NOT?: InputMaybe<ShiftSummaryWhere>;
};

export type TakenAggregationWhereInput = {
  AND?: InputMaybe<Array<TakenAggregationWhereInput>>;
  OR?: InputMaybe<Array<TakenAggregationWhereInput>>;
  NOT?: InputMaybe<TakenAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  at_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  at_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  at_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  at_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  at_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  at_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  at_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  at_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  at_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  at_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  at_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  at_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  at_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  at_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  at_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  at_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  at_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  at_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  at_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  at_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  at_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TakenCreateInput = {
  at: Scalars["String"]["input"];
};

export type TakenSort = {
  at?: InputMaybe<SortDirection>;
};

export type TakenUpdateInput = {
  at?: InputMaybe<Scalars["String"]["input"]>;
};

export type TakenWhere = {
  at?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  at_NOT?: InputMaybe<Scalars["String"]["input"]>;
  at_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  at_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  at_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  at_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  at_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  at_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  at_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  at_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<TakenWhere>>;
  AND?: InputMaybe<Array<TakenWhere>>;
  NOT?: InputMaybe<TakenWhere>;
};

export type VitalsObservationConnectWhere = {
  node: VitalsObservationWhere;
};

export type VitalsObservationCreateInput = {
  temperature: Scalars["String"]["input"];
  bloodPressure?: InputMaybe<Scalars["String"]["input"]>;
  heartRate?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus?: InputMaybe<Scalars["String"]["input"]>;
  painLevel?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation?: InputMaybe<Scalars["String"]["input"]>;
  painResponse?: InputMaybe<Scalars["String"]["input"]>;
  observationDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type VitalsObservationOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more VitalsObservationSort objects to sort VitalsObservations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VitalsObservationSort>>;
};

/** Fields to sort VitalsObservations by. The order in which sorts are applied is not guaranteed when specifying many fields in one VitalsObservationSort object. */
export type VitalsObservationSort = {
  id?: InputMaybe<SortDirection>;
  temperature?: InputMaybe<SortDirection>;
  bloodPressure?: InputMaybe<SortDirection>;
  heartRate?: InputMaybe<SortDirection>;
  respiratoryRate?: InputMaybe<SortDirection>;
  mentalStatus?: InputMaybe<SortDirection>;
  painLevel?: InputMaybe<SortDirection>;
  painLocation?: InputMaybe<SortDirection>;
  painResponse?: InputMaybe<SortDirection>;
  observationDate?: InputMaybe<SortDirection>;
};

export type VitalsObservationUpdateInput = {
  temperature?: InputMaybe<Scalars["String"]["input"]>;
  bloodPressure?: InputMaybe<Scalars["String"]["input"]>;
  heartRate?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus?: InputMaybe<Scalars["String"]["input"]>;
  painLevel?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation?: InputMaybe<Scalars["String"]["input"]>;
  painResponse?: InputMaybe<Scalars["String"]["input"]>;
  observationDate?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type VitalsObservationWhere = {
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
  temperature?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  temperature_NOT?: InputMaybe<Scalars["String"]["input"]>;
  temperature_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  temperature_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  temperature_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  temperature_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  temperature_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  temperature_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  temperature_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  temperature_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  bloodPressure?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bloodPressure_NOT?: InputMaybe<Scalars["String"]["input"]>;
  bloodPressure_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bloodPressure_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  bloodPressure_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  bloodPressure_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  bloodPressure_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bloodPressure_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bloodPressure_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  bloodPressure_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  heartRate?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  heartRate_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  heartRate_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  heartRate_LT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_GT?: InputMaybe<Scalars["Int"]["input"]>;
  heartRate_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  respiratoryRate_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  respiratoryRate_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["Int"]["input"]>>
  >;
  respiratoryRate_LT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_GT?: InputMaybe<Scalars["Int"]["input"]>;
  respiratoryRate_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  mentalStatus?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mentalStatus_NOT?: InputMaybe<Scalars["String"]["input"]>;
  mentalStatus_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mentalStatus_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  mentalStatus_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  mentalStatus_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  mentalStatus_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mentalStatus_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mentalStatus_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  mentalStatus_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  painLevel?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painLevel_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painLevel_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  painLevel_LT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_GT?: InputMaybe<Scalars["Int"]["input"]>;
  painLevel_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  painLocation?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painLocation_NOT?: InputMaybe<Scalars["String"]["input"]>;
  painLocation_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painLocation_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  painLocation_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  painLocation_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  painLocation_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painLocation_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painLocation_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painLocation_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  painResponse?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painResponse_NOT?: InputMaybe<Scalars["String"]["input"]>;
  painResponse_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painResponse_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  painResponse_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  painResponse_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  painResponse_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painResponse_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painResponse_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  painResponse_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  observationDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  observationDate_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  observationDate_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  observationDate_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  observationDate_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<VitalsObservationWhere>>;
  AND?: InputMaybe<Array<VitalsObservationWhere>>;
  NOT?: InputMaybe<VitalsObservationWhere>;
};

export interface PatientAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
  age?: boolean;
}

export declare class PatientModel {
  public find(args?: {
    where?: PatientWhere;

    options?: PatientOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Patient[]>;
  public create(args: {
    input: PatientCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePatientsMutationResponse>;
  public update(args: {
    where?: PatientWhere;
    update?: PatientUpdateInput;
    connect?: PatientConnectInput;
    disconnect?: PatientDisconnectInput;
    create?: PatientCreateInput;
    connectOrCreate?: PatientConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePatientsMutationResponse>;
  public delete(args: {
    where?: PatientWhere;
    delete?: PatientDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PatientWhere;

    aggregate: PatientAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PatientAggregateSelection>;
}

export interface VitalsObservationAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  temperature?: boolean;
  bloodPressure?: boolean;
  heartRate?: boolean;
  respiratoryRate?: boolean;
  mentalStatus?: boolean;
  painLevel?: boolean;
  painLocation?: boolean;
  painResponse?: boolean;
  observationDate?: boolean;
}

export declare class VitalsObservationModel {
  public find(args?: {
    where?: VitalsObservationWhere;

    options?: VitalsObservationOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<VitalsObservation[]>;
  public create(args: {
    input: VitalsObservationCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateVitalsObservationsMutationResponse>;
  public update(args: {
    where?: VitalsObservationWhere;
    update?: VitalsObservationUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateVitalsObservationsMutationResponse>;
  public delete(args: {
    where?: VitalsObservationWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: VitalsObservationWhere;

    aggregate: VitalsObservationAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<VitalsObservationAggregateSelection>;
}

export interface MedicationAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class MedicationModel {
  public find(args?: {
    where?: MedicationWhere;

    options?: MedicationOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Medication[]>;
  public create(args: {
    input: MedicationCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMedicationsMutationResponse>;
  public update(args: {
    where?: MedicationWhere;
    update?: MedicationUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMedicationsMutationResponse>;
  public delete(args: {
    where?: MedicationWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MedicationWhere;

    aggregate: MedicationAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MedicationAggregateSelection>;
}

export interface ShiftSummaryAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  note?: boolean;
  date?: boolean;
}

export declare class ShiftSummaryModel {
  public find(args?: {
    where?: ShiftSummaryWhere;

    options?: ShiftSummaryOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<ShiftSummary[]>;
  public create(args: {
    input: ShiftSummaryCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateShiftSummariesMutationResponse>;
  public update(args: {
    where?: ShiftSummaryWhere;
    update?: ShiftSummaryUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateShiftSummariesMutationResponse>;
  public delete(args: {
    where?: ShiftSummaryWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ShiftSummaryWhere;

    aggregate: ShiftSummaryAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ShiftSummaryAggregateSelection>;
}

export interface NextShiftAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  note?: boolean;
  date?: boolean;
}

export declare class NextShiftModel {
  public find(args?: {
    where?: NextShiftWhere;

    options?: NextShiftOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<NextShift[]>;
  public create(args: {
    input: NextShiftCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateNextShiftsMutationResponse>;
  public update(args: {
    where?: NextShiftWhere;
    update?: NextShiftUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateNextShiftsMutationResponse>;
  public delete(args: {
    where?: NextShiftWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: NextShiftWhere;

    aggregate: NextShiftAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<NextShiftAggregateSelection>;
}

export interface ModelMap {
  Patient: PatientModel;
  VitalsObservation: VitalsObservationModel;
  Medication: MedicationModel;
  ShiftSummary: ShiftSummaryModel;
  NextShift: NextShiftModel;
}
