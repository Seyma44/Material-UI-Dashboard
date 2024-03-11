"use strict";
exports.__esModule = true;
exports.options = exports.appointments = exports.consultants = exports.diets = void 0;
// Sample data
exports.diets = [
    { id: '1', name: 'Keto Diet', calories: 1220, fat: 200, carbs: 320, protein: 700 },
    { id: '2', name: 'Gluten Free Diet', calories: 1320, fat: 200, carbs: 120, protein: 1000 },
    { id: '3', name: 'Gain Weight', calories: 1520, fat: 200, carbs: 620, protein: 700 },
];
exports.consultants = [
    { id: '1', name: 'Suzi Lorem', age: 32, gender: 'Female', plan: 'Keto Diet', status: 'Aktive' },
    { id: '2', name: 'Arthur Giga', age: 22, gender: 'Male', plan: 'Gluten Free Diet', status: 'Passive' },
    { id: '3', name: 'Ivan Tylor', age: 28, gender: 'Female', plan: 'Gain Weight', status: 'Aktive' },
];
exports.appointments = [
    { id: '1', name: 'Suzi Lorem', date: '12/03/2024', time: '12:30', location: 'Office', dietname: 'Keto Diet' },
    { id: '2', name: 'Ivan Tylor', date: '14/03/2024', time: '08:00', location: 'Online', dietname: 'Gluten Free Diet' },
    { id: '3', name: 'Arthur Giga', date: '15/03/2024', time: '16:15', location: 'Hospital', dietname: 'Gain Weight' },
];
exports.options = ["Suzi Lorem", "Ivan Tylor", "Arthur Giga"];
