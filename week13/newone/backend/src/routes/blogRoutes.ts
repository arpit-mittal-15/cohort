import {Router} from 'express';
import getAllBlogs from '../controllers/blog/getAllBlogs';
import createNewBlog from '../controllers/blog/createNewBlog';
import getBlogDetails from '../controllers/blog/getBlogDetails';

const router = Router();

router.get('/', getAllBlogs);
router.post('/create', createNewBlog);
router.get('/:id', getBlogDetails);

export default router;