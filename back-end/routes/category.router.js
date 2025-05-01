import express from 'express'
import { store, index, show, destroy } from '../controllers/category.controller.js';

const categoryRouter = express.Router();

categoryRouter.get('/all', index);
categoryRouter.post('/store', store);
categoryRouter.get('/show/:id', show)
categoryRouter.delete('/delete/:id', destroy)



export default  categoryRouter;