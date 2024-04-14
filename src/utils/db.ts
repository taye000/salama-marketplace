import { configs } from "@/configs";
import mongoose, { Connection } from "mongoose";

if (!configs.mongo_uri) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(configs.mongo_uri!, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
