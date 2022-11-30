import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controller/controller.js";
import { UserCheck } from "../midware/midware.js";

export const UserRouter = Router()

UserRouter
.route("/")
.get(getAllUsers)
.post(createUser)

UserRouter
.route("/:id")
.get(UserCheck,getOneUser)
.put(UserCheck,updateUser)
.delete(UserCheck,deleteUser)


