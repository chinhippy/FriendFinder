// Dependencies
// --------------------
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// ---------------------
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Require necessary routing files
// ----------------------
require('../FriendFinder/app/routing/apiRoutes')(app)
require('../FriendFinder/app/routing/htmlRoutes')(app)


// Starts the server to begin listening
// ----------------------
app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`)
})
