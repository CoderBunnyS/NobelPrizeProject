//express is server
//app activates express function so it's usable w/ app.use or app.listen, etc
const express = require('express');
const app = express();
//body-parser takes info from form/postman and 
//formats it so both express(server) and mongoose (database) can read it
const bodyParser = require('body-parser');

//when app (server function) is called - format it to JSON
app.use(bodyParser.json())
//when app (server function) is called for routes - /routes/Nobel_Routes is required in url
//w/ require you're connecting it to the list of routes available
app.use('/', require('./routes/Nobel_Routes'))


<<<<<<< HEAD
app.listen(4001, () => console.log('listening on port 4001'))
=======
app.listen(4000, () => console.log('listening on port 4000'))
>>>>>>> 5a974638cddbdd1c13826fe8005d1bf6e5208e36
