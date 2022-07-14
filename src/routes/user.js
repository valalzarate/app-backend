const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/users', async (request,response)=>{
    const user = new User(request.body)
    
    user.save()
    .then(result => response.json(result))
    .catch(error => response.json({message: error}))
  
})

router.get('/users',async (request, response)=>{
    const users = await User.find()

    response.json(users)
    //Users.find()
    //.then( data => response.json(data))
    //.catch( error => response.json({message: error;}) )

})

router.get('/users/:id',async(request,response)=>{
    const { id }= request.params

    User.findById(id)
    .then(user => response.json(user))
    .catch(error => response.json({message:error}))
}
)

router.put('/users/:id',(request,response)=>{
    const {id} = request.params
    const {name, age, email} = request.body

    User
    .updateOne({_id: id},{$set: {name, age, email}})
    .then(result => response.json(result))
    .catch(error => response.json({message:error}))
}
)

router.delete('/users/:id',(request,response)=>{
    const {id} = request.params
    User
    .remove({_id: id})
    .then(result=> response.json(result))
    .catch(error => response.json({message:error}))
})

module.exports = router