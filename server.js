const express=require('express')
const {MongoClient , ObjectID }=require('mongodb')
const bodyParser = require('body-parser')
const app=express()
const assert=require('assert')
const mongo_url = 'mongodb://localhost:27017'
const dataBase='MyContact'

app.use(bodyParser.json())

MongoClient.connect(mongo_url,{ useUnifiedTopology: true },(err,client)=>{
    assert.equal(err, null,'data base cpnnecxion failed')
const db = client.db(dataBase)
//update user
app.put("/New_User/:id",(req,res)=>{
    let id=ObjectID(req.params.id)
    let modification=req.body
    db.collection('contactlist').findOneAndUpdate({_id : id},{$set:{...modification}},(err,data)=>
    {
        if(err)res.send("err")
        else res.send('product was modified')
    })
})
//add user
app.post('/New_User',(req,res)=>{
let  newuser =req.body
    db.collection('contactlist').insertOne(newuser,(err,data)=>{
            if(err)res.send('cant add product')
    else res.send('add avec succ')
    })

})
//list of users
app.get("/New_User",(req,res)=>{
    db.collection("contactlist").find().toArray((err,data)=>{
        if(err)res.send('we cnt ')
        else res.send(data)
    })
})
// delete user
app.delete("/New_User/:id",(req,res)=>{
    let usertoremove=ObjectID(req.params.id)
    db.collection('contactlist').findOneAndDelete({_id:usertoremove},(err,data)=>
    {
        if(err)res.send("we can't remove this user")
        else res.send('saye')
    })
})




})




app.listen(5000,(err)=>{
    if(err)
    console.log('errr')
    else 
    console.log('good')})
