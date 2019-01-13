const path = require('path')

module.exports = function(app) {
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })

  app.get('*', function(req, res) {
    //   stack overflow result for 'default catch-all route, express js'
    res.redirect('/');
  })
}