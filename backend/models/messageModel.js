const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const messageSchema = new mongoose.Schema(
  {
    message: { type: String, trim: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

messageSchema.set("toJSON", {
  transform: (doc, res) => {
    res.id = res._id.toString();
    delete res._id;
    delete res.__v;
  },
});

messageSchema.plugin(validator);

const Message = mongoose.model("AnonMessage", messageSchema);

module.exports = Message;
