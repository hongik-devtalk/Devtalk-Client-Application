import type { SeminarDetailResponse } from '../../types/SeminarManage/seminarDetail.api';
import { adminInstance } from '../adminInstance';

// 세미나 상세 조회
export const getSeminarDetail = async (seminarId: number): Promise<SeminarDetailResponse> => {
  const res = await adminInstance.get<SeminarDetailResponse>(`/admin/seminars/${seminarId}`);
  return res.data;
};
