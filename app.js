require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const { MongoClient, ObjectId } = require('mongodb');
var bodyParser = require('body-parser');

const webRouter = require('./routes/web-router');
const gamesApiRouter = require('./routes/api/games-api-router');
const booksApiRouter = require('./routes/api/books-api-router');

const app = express();

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs"
}));

app.set("view engine", "hbs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', webRouter);
app.use('/api/games', gamesApiRouter);
app.use('/api/books', booksApiRouter);

app.listen(8000, () => {
    console.log('http://localhost:8000');
});
