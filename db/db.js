import { MongoClient } from "mongodb";

const url ='mongodb+srv://robertbx:ehQCVylVi2CICL7b@cluster0.gszyoql.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url)

const dbName = "Project10"

client.connect

export const db = client.db(dbName)