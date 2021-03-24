// requiring mongoose for connecting database mongodb atlas
const mongoose = require("mongoose");
// making schema
const PostSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    require: true,
  },

});
module.exports=mongoose.model("Post", PostSchema);
