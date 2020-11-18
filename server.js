//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/product-movie-x'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/product-movie-x/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log('Product Movie X app is running on', process.env.PORT || 8080);