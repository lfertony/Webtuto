var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.ObjectId, ref: 'Author', required: true},
        
    }
)