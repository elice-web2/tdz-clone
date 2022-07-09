declare module 'express' {
  interface Request {
    currentUserId?: string;
  }
}
// export {};

// declare global {
//   namespace Express {
//     interface Request {
//       currentUserId?: string;
//     }
//   }
// }
