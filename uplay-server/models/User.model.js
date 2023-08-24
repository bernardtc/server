const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName:{
      type: String,
      required: true,
    },
    googleId: String,
    lastName: {
      type: String,
      required: true,
    }, 
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },

    // userType: {
    //   type: String,
    //   required: true,
    // },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;