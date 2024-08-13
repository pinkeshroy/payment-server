import mongoose, { Document } from "mongoose";
declare global {
  interface ProcessEnv {
    PORT: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    EMAIL_USER: string;
    EMAIL_PASS: string;
  }

  interface IUser extends Document {
    email: string;
    isVerified: boolean;
    name?: string;
    _id: string;
  }

  interface IOtp extends Document {
    email: string;
    otp: string;
    expiresAt: Date;
  }
}

export {}