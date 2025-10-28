import type { showSeminarRequest, showSeminarResponse } from '../../types/HomeManage/showSeminar';
import { adminInstance } from '../adminInstance';

export const postShowSemiar = async ({
  seminarNum,
  applicantActivate,
  liveActivate,
}: showSeminarRequest): Promise<showSeminarResponse> => {
  const res = await adminInstance.post<showSeminarResponse>('/admin/show-seminar', {
    seminarNum,
    applicantActivate,
    liveActivate,
  });
  return res.data;
};
