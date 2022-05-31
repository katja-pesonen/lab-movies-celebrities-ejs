// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// require the movie model here
const MovieModel = require('../models/Movie.model')

// require the celebrities model here as an extra, need it below.
const CelebrityModel = require('../models/Celebrity.model')


// all your routes here
/* GET celebrities list page */
router.get("/", async (req, res, next) => {
    try {
     const movies = await MovieModel.find()
    res.render("movies/movies", { movies });
}
 catch (error) {
    console.log('Error occurred: ' , error)
 }
});


router.get('/movie-details/:id', async (req, res) => {
  const movie = await MovieModel.findById(req.params.id).populate('cast')
  console.log(movie)
  res.render('movies/movie-details', { movie })
})

// Iteration : Add a new movie GET
router.get('/create', async (req, res, next) => {
    const celebs = await CelebrityModel.find()
    res.render('movies/new-movie', { celebs })
  });
  
  // Iteration : Add a new movie POST
  router.post('/create', async (req, res, next) => {
  try {
    await MovieModel.create(req.body)
    res.redirect('/movies')

  } catch (error) {
    console.log('Error creating movie: ', error)
    res.redirect('/movies/create')
  }
});

  
  
  // Iteration: Edit the movie GET
  router.get('/edit/:id', async (req, res, next) => {
    try {
    const movie = await MovieModel.findById(req.params.id)
    const celebs = await CelebrityModel.find()
    res.render('movies/edit-movie', { movie, celebs }) 
  
  } catch (error) {
    console.log('Error occurred: ' , error)
  }
  });
  
    // Iteration: Edit the movie POST
  router.post('/edit/:id', async (req, res) => {
    try {
    await MovieModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`movies/movie-details/${req.params.id}`)
  
  } catch (error) {
    console.log('Error occurred: ' , error)
  }
  });
  
  
   // Iteration: Delete the movie
   router.post('/delete/:id', async (req, res) => {
    try {
      await MovieModel.findByIdAndDelete(req.params.id)
      res.redirect('/movies')
    } catch (error) {
      console.log('Error Deleting Movie', error)
    }
  })
  


module.exports = router
