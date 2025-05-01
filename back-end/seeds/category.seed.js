import { Category } from "../models/category.model.js";
import connectDB from "../config/db.js";

const categories = [
    { libelle: 'Informatique' },
    { libelle: 'Littérature' },
    { libelle: 'Science' },
    { libelle: 'Histoire' },
    { libelle: 'Mathématiques' },
]

const seedCategorie = async () => {
    try {

        await connectDB();

        Category.deleteMany();
        console.log('Old category deleted');
        Category.insertMany(categories);
        console.log('New seeders added');
        
        process.exit();

    } catch (error) {
        console.error('An error occur while seeding!');
        process.exit(1);
    }
}

seedCategorie();