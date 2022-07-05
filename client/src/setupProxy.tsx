import { createProxyMiddleware } from 'http-proxy-middleware';

const module = (app: any) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
};

export default module;
