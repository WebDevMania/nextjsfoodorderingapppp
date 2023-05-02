import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5
    },
    desc: {
        type: String,
        required: true,
        min: 10
    },
    category: {
        type: String,
        enum: ['pizza', 'spaghetti', 'vegetarian', 'bread', 'gyros', 'burger'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export default mongoose?.models?.Meal || mongoose.model("Meal", MealSchema)