// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// require the celebrities model here
const CelebrityModel = require('../models/Celebrity.model')

// all your routes here
/* GET celebrities list page */
router.get("/", async (req, res, next) => {
    try {
     const celebrities = await CelebrityModel.find()
    res.render("celebrities/celebrities", { celebrities });
}
 catch (error) {
    console.log('Error occurred: ' , error)
 }
});



// Iteration #3: Add a new celebrity GET
router.get('/create',  (req, res, next) => {
    
    res.render('celebrities/new-celebrity')
  });
  
  // Iteration #3: Add a new celebrity POST
  router.post('/create', async (req, res, next) => {
    
    const newCeleb = await CelebrityModel.create(req.body)
    res.redirect('/celebrities' )
  
  });
  
  router.get('/celebrities/:celebId', async (req, res) => {
    const celebrity = await CelebrityModel.findById(req.params.celebId)
    const data = { celebrity }
    res.render('celebrities', data)
  })
  
  
  router.get('/celebrities/:celebId/edit', async (req, res, next) => {
    // Iteration: Update the celeb
    try {
    const celebrity = await CelebrityModel.findById(req.params.celebId)
    res.render('celebrities/update-celeb', { celebrity }) 
  
  } catch (error) {
    console.log('Error occurred: ' , error)
  }
  });
  
  
  router.post('/celebrities/:celebId/edit', async (req, res, next) => {
    // Iteration #4: Update the celeb
    try {
    const { celebId } = req.params
    await CelebrityModel.findByIdAndUpdate(celebId, req.body)
    res.redirect('/celebrities')
  
  } catch (error) {
    console.log('Error occurred: ' , error)
  }
  });
  
  
  
  router.post('/celebrities/:celebId/delete', async (req, res, next) => {
    // Iteration #5: Delete the celeb
    try {
    await CelebrityModel.findByIdAndDelete(req.params.celebId)
    res.redirect('/celebrities')
    
  } catch (error) {
    console.log('Error occurred: ' , error)
  }
  });

module.exports = router
