// types.ts
export interface Diet {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }
  
  export interface Consultant {
    id: string;
    name: string;
    age: number;
    gender: string;
    plan: string;
    status: string;
  }
  
  export interface Appointment {
    id: string;
    name: string;
    date: string;
    time: string;
    location: string;
    dietname: string;
  }
  
  export interface LoginResponse {
    success: boolean;
    message: string;
  }
  