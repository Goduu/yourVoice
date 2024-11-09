export const typeDefs = `#graphql
type Patient @node {
  id: ID @id
  name: String!
  age: Int!
  allergies: [String!]!
  takenMedication: [Medication!]!
    @relationship(type: "TAKEN", properties: "Taken", direction: OUT)
  hasObservation: [VitalsObservation!]! 
    @relationship(type: "HAS_OBSERVATION", direction: OUT) 
  hasShiftSummary: [ShiftSummary!]!
    @relationship(type: "HAS_SHIFT_SUMMARY", direction: OUT)
  hasNextShift: [NextShift!]!
    @relationship(type: "HAS_NEXT_SHIFT", direction: OUT)
}

type VitalsObservation @node  {
  id: ID @id
  temperature: String!
  bloodPressure: String
  heartRate: Int 
  respiratoryRate: Int 
  mentalStatus: String 
  painLevel: Int
  painLocation: String
  painResponse: String
  observationDate: DateTime
}


type Taken @relationshipProperties {
  at: String!
}

type Medication @node {
  id: ID @id
  name: String! @unique(constraintName: "unique_medication_name")
}

type ShiftSummary {
  id: ID @id
  note: String!
  date: DateTime!
}

type NextShift {
  id: ID @id
  note: String!
  date: DateTime!
}
`;