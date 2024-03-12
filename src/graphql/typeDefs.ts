const { gql } = require('@apollo/client');

const typeDefs = gql`
  type Diet {
    id: ID!
    name: String!
    calories: Int!
    fat: Float!
    carbs: Float!
    protein: Float!
  }

  type Consultant {
    id: ID!
    name: String!
    age: Int!
    gender: String!
    plan: String!
    status: String!
  }

  type Appointment {
    id: ID!
    name: String!
    date: String!
    time: String!
    location: String!
    dietname: String!
  }

  type Query {
    diets: [Diet!]!
    consultants: [Consultant!]!
    appointments: [Appointment!]!
    options: [String!]!
    dietOptions: [String!]!
  }

  type Mutation {
    addDiet(id: ID!, name: String!, calories: Int!, fat: Float!, carbs: Float!, protein: Float!): Diet!
    deleteDiet(id: ID!): Diet
    addConsultant(id: ID!, name: String!, age: Int!, gender: String!, plan: String!, status: String!): Consultant!
    deleteConsultant(id: ID!): Consultant
    addAppointment(id: ID!, name: String!, date: String!, time: String!, location: String!, dietname: String!): Appointment!
    deleteAppointment(id: ID!): Appointment
    login(email: String!, password: String!): LoginResponse!
  }

  type LoginResponse {
    success: Boolean!
    message: String!
  }
`;

export default typeDefs;
