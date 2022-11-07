const mongoose = require('mongoose');
const { DB_REMOTE_URI } = process.env;

const dbConnection = async () => {

    try {
        await mongoose.connect(DB_REMOTE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected')
    } catch (error) {
        console.log(error);
    }

};


module.exports = {
    dbConnection,
}