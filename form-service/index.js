const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const hbs = require('hbs');

const storage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, 'uploads/')
  },
  filename: function (req, file, next) {
    next(null, file.originalname);
  }
})

const app = express();
const upload = multer({ storage: storage })

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('uploads'));


app.post('/user', upload.single('image'), function (req, res) {
  console.log(req.file);
  res.send('User image received');
});

const user = {
  name: "Sahil",
}

app.get('/profile/:name', function (req, res) {
  const { name } = req.params;
  user.profile = `./${name}.jpg`
  console.log(user);
  res.render('profile', {user: user});
});


app.listen(3000, function () {
  console.log("Server started");
});