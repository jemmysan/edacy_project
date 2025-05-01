import express from 'express'
import { store, index, show, update} from '../controllers/book.controller.js';


export const bookRouter = express.Router();

bookRouter.post('/add', store);
bookRouter.get('/all', index);
bookRouter.get('/show/:id', show);
bookRouter.post('/update/:id', update);






