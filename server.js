let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let gameRoutes = require('./routes/gameRoutes');

// MONGO CONNECT
let mongo_connection_string = "mongodb://localhost/xmix";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_connection_string, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true // anti depracation configs
},
  function (err, db) {
    if (err) {
      console.error("Error connecting to mongo", err);
    } else {
      console.log("Connected to mongo");
    }
  });
  // MONGO CONNECT


let app = express();
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public/login'));
app.use(express.static(__dirname + '/public/homePage'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());


app.use('/games', gameRoutes);

// app.get('/', (req, res) => {    
//   res.sendFile(__dirname + "/public/homePage/homePage.html");    
// });

app.listen(process.env['PORT'] || '8000', function () {
    console.log("Xmix");
});