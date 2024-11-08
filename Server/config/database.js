const mongoose = require("mongoose");

const connectDB = () => {
     
    mongoose.connect(
    "mongodb+srv://krishnavamsi:lu7kqXRSv7FWYXlU@cluster0.uwfct.mongodb.net/customizationdb?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

};
module.exports = connectDB;
