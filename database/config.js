
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN
    
    // , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }
    );
    console.log('DB OnLine');
  } catch (error) {
    console.log(error);
    throw new Error ('Error al iniciar la BD'); 
  }
};

module.exports = {
    dbConnection
}
