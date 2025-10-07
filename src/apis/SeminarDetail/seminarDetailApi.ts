import type { EmptyResultResponse } from '../../types/common';
import type { SeminarDetailResponse } from '../../types/SeminarManage/seminarDetail.api';
import { adminInstance } from '../adminInstance';

// 세미나 상세 조회
export const getSeminarDetail = async (seminarId: number): Promise<SeminarDetailResponse> => {
  const res = await adminInstance.get<SeminarDetailResponse>(`/admin/seminars/${seminarId}`);
  return res.data;
};

// 세미나 삭제
export const deleteSeminar = async (seminarId: number): Promise<EmptyResultResponse> => {
  const res = await adminInstance.delete<EmptyResultResponse>(`/admin/seminars/${seminarId}`);
  return res.data;
};
