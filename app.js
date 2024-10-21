// const express = require('express');
// const app = express();
// const userModel = require('./usermodel')
 
// app.get('/', (req, res) => {
//     res.send('hey')
//  }
// )

// app.get('/create', async (req, res) => {
//     let createdUser = await userModel.create({
//         name: "vivek",
//         username: "crimsonbully",
//         email: "vivekgaver2016@gmail.com"
//     })
//     res.send(createdUser)
// })

// app.get('/create', async (req, res) => {
//     let createdUser = await userModel.create({
//         name: "fae",
//         username: "glittervodka",
//         email: "glitter2003@gmail.com"
//     })
//     res.send(createdUser)
// })

// app.get('/update', async (req, res) => {
//     let updatedUser = await userModel.findOneAndUpdate({username:'crimsonbully'}, {name: 'vivuChan'}, {new:true})
//     res.send(updatedUser)
// })

// app.get('/read', async (req, res) => {
//    let users = await userModel.find(); //or we can pass userModel.find(username: "glittervodka") to get a single user entry
//    res.send(users);
// })

// app.get('/delete', async (req, res) => {
//     let deletedUser = await userModel.findOneAndDelete({
//         name: "vivuChan"
//     })
//     res.send(deletedUser)
// })
    

// app.listen(3000);

const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded( {extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/create', async (req,res) => {
    let {name, email, image} = req.body
    let createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.send(createdUser);
})


app.get('/read', async (req,res) => {
    let users = await userModel.find();
    console.log(users)
    res.render("read", { users });
})

app.get('/delete/:id', async (req,res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read')   
})

app.listen(3000)

