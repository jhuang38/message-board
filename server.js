const express = require('express');
const path = require('path');
const dbController = require('./db/dbController');
const mongoose = require('mongoose');

// include development environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
const port = process.env.PORT || 5000;

// connect to mongodb atlas
try {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('Connected to DB Atlas'))
    // listen for backend requests on port 5000
        .then(app.listen(port, () => console.log(`Server started on port ${port}`)));
} catch (err) {
    console.error(err);
}
// middlewares (dbController handles GET and POST requests)
app.use(express.json());
app.use(dbController);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

