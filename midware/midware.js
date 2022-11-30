import { ObjectId } from "mongodb";
import { db } from "../db/db.js";


export const UserCheck = async (req,res,next)=>{
    const {id} = req.params;
    const UserCollection = await db.collection('Users')
   
if (id.length < 24) {
   res.status(400).json({msg: "id länge stimmt nicht"})
}
    const oneUser = await UserCollection.find({"_id" : ObjectId(id)}).toArray()
    console.log(oneUser)
    console.log(oneUser.length)
    if(oneUser.length === 1){
        next() 
        
    }else{
        res.status(400).json({msg:'user nicht vorhanden'})
        
    }

   
    
}