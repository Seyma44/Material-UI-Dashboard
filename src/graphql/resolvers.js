"use strict";
exports.__esModule = true;
var sampleData_1 = require("./sampleData");
// Resolver functions
var resolvers = {
    Query: {
        diets: function () { return sampleData_1.diets; },
        consultants: function () { return sampleData_1.consultants; },
        appointments: function () { return sampleData_1.appointments; },
        options: function () { return sampleData_1.options; },
        dietOptions: function () { return sampleData_1.diets.map(function (diet) { return diet.name; }); }
    },
    Mutation: {
        addDiet: function (_, _a) {
            var id = _a.id, name = _a.name, calories = _a.calories, fat = _a.fat, carbs = _a.carbs, protein = _a.protein;
            var newDiet = { id: id, name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
            sampleData_1.diets.push(newDiet);
            return newDiet;
        },
        deleteDiet: function (_, _a) {
            var id = _a.id;
            var index = sampleData_1.diets.findIndex(function (diet) { return diet.id === id; });
            if (index !== -1) {
                var deletedDiet = sampleData_1.diets.splice(index, 1)[0];
                return deletedDiet;
            }
            return null;
        },
        addConsultant: function (_, _a) {
            var id = _a.id, name = _a.name, age = _a.age, gender = _a.gender, plan = _a.plan, status = _a.status;
            var newConsultant = { id: id, name: name, age: age, gender: gender, plan: plan, status: status };
            sampleData_1.consultants.push(newConsultant);
            return newConsultant;
        },
        deleteConsultant: function (_, _a) {
            var id = _a.id;
            var index = sampleData_1.consultants.findIndex(function (consultant) { return consultant.id === id; });
            if (index !== -1) {
                var deletedConsultant = sampleData_1.consultants.splice(index, 1)[0];
                return deletedConsultant;
            }
            return null;
        },
        addAppointment: function (_, _a) {
            var id = _a.id, name = _a.name, date = _a.date, time = _a.time, location = _a.location, dietname = _a.dietname;
            var newAppointment = { id: id, name: name, date: date, time: time, location: location, dietname: dietname };
            sampleData_1.appointments.push(newAppointment);
            return newAppointment;
        },
        deleteAppointment: function (_, _a) {
            var id = _a.id;
            var index = sampleData_1.appointments.findIndex(function (appointment) { return appointment.id === id; });
            if (index !== -1) {
                var deletedAppointment = sampleData_1.appointments.splice(index, 1)[0];
                return deletedAppointment;
            }
            return null;
        },
        login: function (_, _a) {
            var email = _a.email, password = _a.password;
            if (email === 'admin@admin.com' && password === 'password') {
                return { success: true, message: 'Login successful' };
            }
            else {
                return { success: false, message: 'Invalid credentials' };
            }
        }
    }
};
exports["default"] = resolvers;
