import type { ReviewListResponse } from '../../types/SeminarManage/seminarReview.api';
import { adminInstance } from '../adminInstance';

// 세미나 후기 목록 조회
export const getSeminarReview = async (seminarId: number): Promise<ReviewListResponse> => {
  const res = await adminInstance.get<ReviewListResponse>(`/admin/seminars/${seminarId}/reviews`);
  return res.data;
};
