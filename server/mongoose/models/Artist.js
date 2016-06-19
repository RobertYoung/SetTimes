// grab the things we need
var mongoose = require('mongoose');
var mongooseInputDate = require('./../middleware/mongoose.input.date');
var Schema = mongoose.Schema;

// create a schema
var artistSchema = new Schema({
  name: String,
  start_time: Date,
  end_time: Date,
  image_url: String,
  set_length: Number,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
artistSchema.pre('save', mongooseInputDate);

// the schema is useless so far
// we need to create a model using it
var Artist = mongoose.model('Artist', artistSchema);

// make this available to our users in our Node applications
module.exports = Artist;
