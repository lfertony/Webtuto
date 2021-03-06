var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});



//Virtual for Author's full name
AuthorSchema
.virtual('name')
.get(function(){
    return this.family_name + ', ' + this.first_name
});

//Virtual for Author's URL
AuthorSchema
.virtual('url')
.get(function(){
    return '/catalog/author/' + this._id;

});

AuthorSchema
.virtual('due_back_formatted')
.get(function(){
  return moment(this.due_back).format('MMMM Do, YYYY');
});
// Export model
module.exports = mongoose.model('Author', AuthorSchema);
