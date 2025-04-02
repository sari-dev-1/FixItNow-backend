const res = require("express/lib/response")
const User = require("../models/UserModel")


async function addUser(req,res){
    let newC = await new User(req.body)
    await newC.save()

    res.send("created successful" + newC)
}

module.exports={addUser}