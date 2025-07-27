import mongoose from 'mongoose'



const MONGODB_URI = process.env.MONGODB_URI as string;

if(!MONGODB_URI){
    throw new Error("please correct the mongoDB UTI")
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend globalThis type
declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache;


if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

// eslint-disable-next-line prefer-const
cached = global.mongoose;

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'myAppDB',
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;


