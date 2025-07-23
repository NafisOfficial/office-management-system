import mongoose from 'mongoose'



const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in your .env file")
}

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

if(!cached.promise){
    cached.promise = mongoose.connect(MONGODB_URI,{
        dbName: "taskManager",
        bufferCommands: false
    }).then((mongoose)=>mongoose)
}

export async function ConnectionDB() {
    if(cached.conn) return cached.conn;
    cached.conn = await cached.promise;
    return cached?.conn
}




