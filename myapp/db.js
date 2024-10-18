// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {
    // Les options `useNewUrlParser` et `useUnifiedTopology` sont omises
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

module.exports = mongoose;
