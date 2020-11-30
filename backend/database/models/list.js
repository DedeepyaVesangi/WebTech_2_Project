const mongoose = require("mongoose");

/*Creating a schema*/ 
const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    }
});

const List = mongoose.model("list", ListSchema);

module.exports = List;
