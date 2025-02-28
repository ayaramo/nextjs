const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
)

export const userModel = mongoose.models.User || mongoose.model("User", userSchema);