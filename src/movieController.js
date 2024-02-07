const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req,res) => {
    let movies = fs.readFileSync('movies.json', 'utf-8');
    movies = JSON.parse(movies);
   res.render('movies/index.njk',{movies: movies});

});

router.get('/add', (req, res) => {
   res.render ('movies/add.njk');
})

 router.post('/add', (req,res) => {
    let movies = fs.readFileSync('movies.json', 'utf-8');
    movies = JSON.parse(movies);
    movies.push({
        name: req.body.movie,
        year: req.body.year,
        description: req.body.description
    });
    let json = JSON.stringify(movies);
  fs.writeFileSync('movies.json', json);
  res.redirect('/movies/');
 });


module.exports = router;