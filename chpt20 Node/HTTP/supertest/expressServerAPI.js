const app = require('express')();

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'tobi' });
});

app.listen(3000);

module.exports = app
