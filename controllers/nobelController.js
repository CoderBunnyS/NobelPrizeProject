const Prizes = require("../models/Prizes")
//all of the following objects are going to be modules that we are exporting
//to be used in another file
module.exports = {
//loads faster to break functions out of the list of routes
//tells it the function to run depending on the route/params the user enters
  index: (req, res) => {
    Prizes.find({})
      .then(data => {
        res.json(data)
      })
  },
  showYear: (req, res) => {
    Prizes.find({year: req.params.year})
      .then(data => {
        res.json(data)
      })
  },
  showCategory: (req, res) => {
    Prizes.find({category: req.params.category})
      .then(data => {
        res.json(data)
      })
  },
  create: (req, res) => {
    Prizes.create(req.body)
      .then(data => {
        res.json(data)
      })
  },
  edit: (req, res) => {
    Prizes.findOneAndUpdate({year: req.params.year}, req.body)
      .then(data => {
        res.json(data)
      })
  },
  delete: (req, res) => {
    Prizes.findOneAndDelete({year: req.params.year})
      .then(data => {
        res.json(data)
      })
  }
}
