// Define your Row types
export interface ConsultantRow {
    id: string;
    name: string;
    age: number;
    gender: string;
    plan: string;
    status: string;
  }
  
  export interface DietRow {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }
  
  export interface AppointmentRow {
    id: string;
    name: string;
    date: string;
    time: string;
    location: string;
    dietname: string;
  }
  
  // Define a Union Type for Rows
  export type Row = ConsultantRow | DietRow | AppointmentRow;
  