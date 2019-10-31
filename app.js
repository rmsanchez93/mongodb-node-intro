// requiring necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// express app built
const app = express();
// requiring mongoose Models we built
const Teams = require('./models/teams')
const Players = require('./models/players')
// making PORT variable
const PORT = 3000

//express to use bodyParser to parse our requests
app.use(bodyParser.json())


//connect mongoDB
mongoose.connect('mongodb://localhost:27017/baseballteams', {useNewUrlParser: true})
.then(()=> console.log('Mangos connected'));


// @TEAMS get all
app.get('/teams', (req,res)=>{
    // res.send('This is a GET request')
    Teams.find()
    .then(data=> res.json(data))
    .catch(err => console.log(err));
    // console.log('GETTING ', allTeams)
    
})
// @TEAMS create one
app.post('/teams/new', (req,res)=>{
    Teams.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));

})
// @TEAMS get one
app.get('/teams/:id', (req,res)=>{
    let {id} = req.params
    console.log('GETTING ONE', id)
    Teams.find({_id: id})
    .then(data=> res.json(data))
    .catch(err=> res.json(err))
    // res.send('This is a GET request for one particular item ')
})

// @TEAMS update one
app.patch('/teams/:id', async (req, res)=>{
    let {id} = req.params
    Teams.findOneAndUpdate(
        { _id: id },
        req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))

})


app.delete('/:id', (req, res)=>{
    Teams.remove(
        {_id: req.params.id}
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
})

app.get('/players', (req, res)=>{
    Players.find()
    .then(data=> res.json(data))
    .catch(err => console.log(err));
})
app.post('/players', (req, res)=>{
    Players.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));

})


app.listen(PORT, ()=>console.log(`listening on ${PORT}!`));