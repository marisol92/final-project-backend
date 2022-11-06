const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        }, 
        slug: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {
        versionKey: false,
    }
);

//Middleware 
//TODO: llevar este middleware a un archivo separado. 
PostSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower:true, strict:true})
    };
    next();
});

module.exports = mongoose.model('Post', PostSchema)