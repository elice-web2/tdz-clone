import { UserSchema } from '../db/schemas/user-schema';

declare global {
  namespace Express {
    interface Request {
      currentUserId?: string;
    }
  }
}
