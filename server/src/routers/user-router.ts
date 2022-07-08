import { Router } from 'express';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
import {
  errorHandler,
  errorLogger,
  loginRequired,
  adminRequired,
} from '../middlewares';
import * as usercontroller from '../controllers';
import { userValidator } from '../validation/validator';
// import { register,login,getUserlist,editUserData } from '../controller';

const userRouter = Router();

// 회원가입 api (아래는 /auth/signup이지만, 실제로는 /api/auth/signup로 요청해야 함.)
userRouter.post(
  '/auth/signup',
  //userValidator.userSignup,
  usercontroller.signUp,
);

export { userRouter };
