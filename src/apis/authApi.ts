import { adminInstance } from './adminInstance';
import type { LoginRequest, LoginResponse, LogoutResponse } from '../types/auth.types';
import { STORAGE_KEY } from '../constants/key';

export const postAdminLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await adminInstance.post<LoginResponse>('/admin/login', data);
  return res.data;
};

export const postAdminLogout = async (): Promise<void> => {
  const refreshToken = localStorage.getItem(STORAGE_KEY.ADMIN_REFRESH_TOKEN);
  if (!refreshToken) {
    console.warn('refreshToken 없음');
    return;
  }
  try {
    const res = await adminInstance.post<LogoutResponse>('/admin/logout', { refreshToken });
    console.log('로그아웃 성공:', res.data);
  } catch (err) {
    console.error('로그아웃 실패:', err);
  } finally {
    localStorage.removeItem(STORAGE_KEY.ADMIN_ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEY.ADMIN_REFRESH_TOKEN);
    window.location.href = '/admin/login';
  }
};
