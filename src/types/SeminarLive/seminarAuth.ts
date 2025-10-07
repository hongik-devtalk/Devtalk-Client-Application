import type { CommonResponse } from '../common';

export type AuthRequest = {
  studentNum: string;
  name: string;
};

export type AuthResult = {
  studentId: number;
  seminarId: number;
  accessToken: string;
  refreshToken: string;
};

export type AuthResponse = CommonResponse<AuthResult>;
