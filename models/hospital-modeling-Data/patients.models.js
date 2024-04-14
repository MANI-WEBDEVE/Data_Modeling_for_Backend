import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema({}, {timestamps:true})


export const Patients = mongoose.model('patients', patientsSchema)