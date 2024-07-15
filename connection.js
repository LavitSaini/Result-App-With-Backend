const mongoose = require("mongoose");

function connect(url){
   mongoose.connect(url).then(() => console.log("Database Connected!")).catch((error) => console.log(error));
}

module.exports = connect;
