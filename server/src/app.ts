import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import { userRouter, mealhistoryRouter } from './routers';
import { errorLogger, errorHandler } from './middlewares';

const app = express();

// CORS 에러 방지
app.use(cors());

//Cookie 사용
app.use(cookieParser('my-secret'));

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

// html, css, js 라우팅
//app.use(viewsRouter);

// api 라우팅
app.use('/api', userRouter);
app.use('/mealhistory', mealhistoryRouter);

// 미들웨어 (에러를 error.log 파일에 기록 및, 에러를 프론트엔드에 전달)
app.use(errorLogger);
app.use(errorHandler);

export { app };
