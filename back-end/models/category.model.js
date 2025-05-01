import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    libelle : {
        type : String
    }
})

export const Category = mongoose.model('Category', CategorySchema);