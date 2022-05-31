// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// require the movie model here
const MovieModel = require('../models/Movie.model')


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


// Iteration : Add a new movie GET
router.get('/create',  (req, res, next) => {
    
    res.render('movies/new-movie')
  });
  
  // Iteration : Add a new movie POST
  router.post('/create', async (req, res, next) => {
    
    const newMovie = await MovieModel.create(req.body)
    res.redirect('/movies' )
  
  });
  
  router.get('/movies/:movieId', async (req, res) => {
    const movie = await MovieModel.findById(req.params.movieId)
    const data = { movie }
    res.render('movies', data)
  })
  
  
  router.get('/movies/:movieId/edit', async (req, res, next) => {
    // Iteration: Update the movie
    try {
    const movie = await CelebrityModel.findById(req.params.movieId)
    res.render('movies/edit-movie', { movie }) 
  
  } catch (error) {
    console.log('Error occurred: ' , error)
  }
  });
  
  
//   router.post('/celebrities/:celebId/edit', async (req, res, next) => {
//     // Iteration #4: Update the celeb
//     try {
//     const { celebId } = req.params
//     await CelebrityModel.findByIdAndUpdate(celebId, req.body)
//     res.redirect('/celebrities')
  
//   } catch (error) {
//     console.log('Error occurred: ' , error)
//   }
//   });
  
  
  
//   router.post('/celebrities/:celebId/delete', async (req, res, next) => {
//     // Iteration #5: Delete the celeb
//     try {
//     await CelebrityModel.findByIdAndDelete(req.params.celebId)
//     res.redirect('/celebrities')
    
//   } catch (error) {
//     console.log('Error occurred: ' , error)
//   }
//   });


module.exports = router
