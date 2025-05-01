import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "The Title is required"],
    },
    author: {
        type: String,
        required: [true, "The Title is required or if you don\'t know the author type unknow"],
    },

    description: {
        type: String,
        minLength: [5, 'The description is required']
    },
    published_year: {
        type: Number,
        categor
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true
    },

    stock: {
        type: Number,
    }
},
    {
        timestamps: true
    }
)


const Book = mongoose.model('Book', BookSchema);

