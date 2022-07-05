const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', () => console.log('Error connecting to database'))
db.once('open', () => console.log('Connected to database'))