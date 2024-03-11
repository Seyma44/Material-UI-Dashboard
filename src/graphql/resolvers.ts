import { consultants, appointments,diets,options} from './sampleData';

  // Resolver functions
  const resolvers = {
    Query: {
      diets: () => diets,
      consultants: () => consultants,
      appointments: () => appointments,
      options: () => options,
      dietOptions: () => diets.map(diet => diet.name),
    },
    Mutation: {
      addDiet: (_: any, { id, name, calories, fat, carbs, protein }: any) => {
        const newDiet = { id, name, calories, fat, carbs, protein };
        diets.push(newDiet);
        return newDiet;
      },
      deleteDiet: (_: any, { id }: any) => {
        const index = diets.findIndex(diet => diet.id === id);
        if (index !== -1) {
          const deletedDiet = diets.splice(index, 1)[0];
          return deletedDiet;
        }
        return null;
      },
      addConsultant: (_: any, { id, name, age, gender, plan, status }: any) => {
        const newConsultant = { id, name, age, gender, plan, status };
        consultants.push(newConsultant);
        return newConsultant;
      },
      deleteConsultant: (_: any, { id }: any) => {
        const index = consultants.findIndex(consultant => consultant.id === id);
        if (index !== -1) {
          const deletedConsultant = consultants.splice(index, 1)[0];
          return deletedConsultant;
        }
        return null;
      },
      addAppointment: (_: any, { id, name, date, time, location, dietname }: any) => {
        const newAppointment = { id, name, date, time, location, dietname };
        appointments.push(newAppointment);
        return newAppointment;
      },
      deleteAppointment: (_: any, { id }: any) => {
        const index = appointments.findIndex(appointment => appointment.id === id);
        if (index !== -1) {
          const deletedAppointment = appointments.splice(index, 1)[0];
          return deletedAppointment;
        }
        return null;
      },
      login: (_: any, { email, password }: any) => {
        if (email === 'admin@admin.com' && password === 'password') {
          return { success: true, message: 'Login successful' };
        } else {
          return { success: false, message: 'Invalid credentials' };
        }
      },
    },
  };
  
  export default resolvers;
  