require('dotenv').config();
const express = require('express');
const cors = require('cors');
const handlebars = require('express-handlebars');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.API_PORT;

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

app.use(express.static('assets/'))

app.use(express.urlencoded({extended: false}))

const pontoController = require('./controllers/PontoController');

app.post('/pontos', pontoController.addPonto);

app.get('/', pontoController.getPage);

app.post('/list', pontoController.addList)