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

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.listen(4001, () => console.log('listening on port 4001'))
