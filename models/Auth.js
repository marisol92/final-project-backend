const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 

const AuthSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

AuthSchema.methods.passwordEncrypt = async password => {
    const salt = await bcrypt.genSalt(); // Semilla para despúes encriptar. 
    return await bycript.hash(password, salt);
}

AuthSchema.methods.checkPassword = async function(password) {
    return await bycript.compare(password, this.password);
}

module.exports = mongoose.model('Auth', AuthSchema);

