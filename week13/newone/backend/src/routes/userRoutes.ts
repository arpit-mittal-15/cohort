import {Router} from 'express';
import userSignup from '../controllers/user/signup';
import userSignin from '../controllers/user/signin';

const router = Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);

export default router;