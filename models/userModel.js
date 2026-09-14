const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "student"],
        default: "student"
    },
}, {
    timestamps: true
}
)

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
        return error
    }
})  

const User = mongoose.model("User", userSchema);

module.exports = User;