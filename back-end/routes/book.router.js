import express from 'express'
import { store, index, show, update, destroy} from '../controllers/book.controller.js';

export const bookRouter = express.Router();

bookRouter.post('/add', store);
bookRouter.get('/all', index);
bookRouter.get('/show/:id', show);
bookRouter.patch('/update/:id', update);
bookRouter.delete('/delete/:id', destroy);







