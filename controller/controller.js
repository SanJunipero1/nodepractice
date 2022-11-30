import { ObjectId} from "mongodb";
import { db } from "../db/db.js";


export const getAllUsers = async (req ,res) => {
    const UserCollection = await db.collection('Users')
    const UserData = await UserCollection.find().toArray()
    res.status(200).json(UserData)
}


export const createUser = async (req, res) => {
    console.log(req.body)
    const {firstname,lastname} = req.body
    const UserCollection = await db.collection('Users')
    const NewUser = await UserCollection.insertOne({
       firstname: firstname,
       lastname: lastname
    })
    res.status(200).json(NewUser)
}


export const deleteUser = async (req, res) => {
    console.log(req.params)
  const {id} = req.params;
  const UserCollection = await db.collection('Users')
  const deleteUser = await UserCollection.deleteOne({_id: ObjectId(id)})
  res.status(202).json({msg: "user deleted"})
}


export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {firstname,lastname} = req.body
    const UserCollection = await db.collection('Users')
    const idunter = `_${id}`
    const UserUpdate = await UserCollection.updateOne({ "_id": ObjectId(id)},{$set:{"lastname":lastname}})
    res.status(200).json({msg: "user update"})
}

export const getOneUser = async (req, res) => {
    console.log("controller",req.params)
    const {id} = req.params;
    const UserCollection = await db.collection('Users')
    const oneUser = await UserCollection.findOne({"_id" : ObjectId(id)})
    res.status(200).send(oneUser)
}
