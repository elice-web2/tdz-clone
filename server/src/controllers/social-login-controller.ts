import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { socialLoginService, userService } from '../services';

class SocialLoginController {
  async kakaoLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`;
      res.redirect(kakaoAuthUrl);
    } catch (err) {
      next(err);
    }
  }

  async kakaoCallback(req: Request, res: Response, next: NextFunction) {
    try {
      const code: string = req.query.code as string;
      const userData = await socialLoginService.kakaoLoginService(code);
      const { isRegister, email, nickname, access_token } = userData;
      const password = 'kakao';

      // 로그인 정보가 없을 때 회원가입
      if (!isRegister) {
        await userService.addUserWithKakao(
          {
            email,
            password,
          },
          nickname,
        );
      }

      res.cookie('token', access_token).status(200).json(access_token);
    } catch (err) {
      next(err);
    }
  }

  async kakaoLogout(req: Request, res: Response, next: NextFunction) {
    try {
      const cookie: string = req.headers.cookie as string;

      const cookieValue = cookie.slice(6);

      const response = await socialLoginService.kakaoLogoutService(cookieValue);

      res.json({ success: true, data: '성공적으로 로그아웃 되었습니다.' });
    } catch (err) {
      next(err);
    }
  }
}

const socialLoginController = new SocialLoginController();
export { socialLoginController };
