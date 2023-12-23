// Create web server
// Run: node comments.js
// Access: http://localhost:3000/comments
// Access: http://localhost:3000/comments/1

var express = require('express');
var app = express();

var comments = [
    {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
    {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
];

// Static files
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/comments', function(req, res) {
    res.json(comments);
});

app.get('/comments/:id', function(req, res) {
    var comment = comments.filter(function(comment) {
        return comment.id == req.params.id;
    });
    res.json(comment[0]);
});

// Start web server
app.listen(3000);
console.log('Web server is running on port 3000');