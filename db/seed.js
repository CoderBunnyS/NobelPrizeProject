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

<<<<<<< HEAD

=======
// Bachelorette.remove({})
// Bachelorette.collection.insert(bacheloretteData)
//   .then(bachelorettes => {
//     console.log(bacheloretteData)
//   })
//   .catch(err => {
//     console.log(err)
//   })
>>>>>>> 5a974638cddbdd1c13826fe8005d1bf6e5208e36
