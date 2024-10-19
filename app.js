const express = require('express');
const app = express();
const userModel = require('./usermodel')
 
app.get('/', (req, res) => {
    res.send('hey')
 }
)

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "vivek",
        username: "crimsonbully",
        email: "vivekgaver2016@gmail.com"
    })
    res.send(createdUser)
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "fae",
        username: "glittervodka",
        email: "glitter2003@gmail.com"
    })
    res.send(createdUser)
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username:'crimsonbully'}, {name: 'vivuChan'}, {new:true})
    res.send(updatedUser)
})

app.get('/read', async (req, res) => {
   let users = await userModel.find(); //or we can pass userModel.find(username: "glittervodka") to get a single user entry
   res.send(users);
})

app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({
        name: "vivuChan"
    })
    res.send(deletedUser)
})
    

app.listen(3000);