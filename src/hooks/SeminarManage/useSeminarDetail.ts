import { useQuery } from '@tanstack/react-query';
import type { SeminarDetailResponse } from '../../types/SeminarManage/seminarDetail.api';
import { getSeminarDetail } from '../../apis/SeminarDetail/seminarDetailApi';
import { QUERY_KEYS } from '../../constants/queryKey';

// 세미나 상세 조회
export const useSeminarDetail = (seminarId: number | undefined) => {
  return useQuery<SeminarDetailResponse>({
    queryKey: [QUERY_KEYS.ADMIN_SEMINAR_DETAILS, seminarId],
    queryFn: () => getSeminarDetail(seminarId!),
    enabled: !!seminarId,
  });
};
