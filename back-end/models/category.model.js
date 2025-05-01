import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    libelle: {
        type: String,
        required : true,
        unique : [true, 'The category must be unique!']
    }
}, {
    timestamps: true
})

export const Category = mongoose.model('Category', CategorySchema);