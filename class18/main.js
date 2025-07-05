const hbs = require('hbs');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('demo');
});

const user = {
  name: 'Peeyush',
  gender: 'male'
}

const image = {
  src: './images/face.jpg'
}

app.get('/user', function (req, res) {
  res.render('user', {user: user, image: image});
})

app.listen(3000, function () {
  console.log("Server started");
});