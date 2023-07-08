import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema(
    {
      name: String,
      status: String,
      value: String,
    }, 
    {
      timestamps: true
    }
);

export const SensorModel = mongoose.model("sensor", sensorSchema);