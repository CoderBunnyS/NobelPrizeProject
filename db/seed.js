//connect to schemas for templates
//create data variable to pull info from json files in same folder

const Prize = require('../models/Prizes')
const modelData = require('./prize.json')

//crating new collection w/ Bachelor.collection called Bachelor
Prize.remove({})
Prize.collection.insert(modelData)
//.then((this word represents the output or results))
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })


