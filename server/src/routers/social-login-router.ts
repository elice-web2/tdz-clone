import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { socialLoginService, userService } from '../services';

const socialLoginRouter = Router();

// 소셜 로그인 (카카오톡)
socialLoginRouter.get(
  '/kakao',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`;
      res.redirect(kakaoAuthUrl);
    } catch (err) {
      next(err);
    }
  },
);

socialLoginRouter.get(
  '/kakao/callback',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const code: string = req.query.code as string;

      console.log('code', code);

      const userData = await socialLoginService.kakaoLogin(code);
      const { isRegister, email } = userData;
      const password = 'kakao';

      // 로그인했던 적이 있으면 바로 로그인을 시켜주고 회원가입 절차는 생략함.
      if (!isRegister) {
        await userService.addUser({
          email,
          password,
        });

        console.log(1);
      }

      console.log(2);

      const userToken = await userService.getUserToken({
        email,
        password,
      });
      console.log('userToken', userToken);

      //만료 시간 24시간 * 3일
      const expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24 * 3);

      res
        .cookie('token', userToken, {
          expires: expiryDate,
          httpOnly: true,
          signed: true,
        })
        .status(200)
        .json(userToken);

      // jwt 토큰을 쿠키에 저장함.
      // res.cookie('accessToken', accessToken, {
      //   maxAge: accessMaxAge,
      // });
      // res.cookie('refreshToken', refreshToken, {
      //   maxAge: refreshMaxAge,
      // });
      // res.cookie('email', email);
      // res.status(200).redirect('/');
    } catch (err) {
      next(err);
    }
  },
);

export { socialLoginRouter };
