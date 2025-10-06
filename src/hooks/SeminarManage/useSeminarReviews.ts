import { useQuery } from '@tanstack/react-query';
import type { ReviewListResponse } from '../../types/SeminarManage/seminarReview.api';
import { getSeminarReview } from '../../apis/SeminarDetail/seminarReviewApi';
import { QUERY_KEYS } from '../../constants/queryKey';

// 세미나 후기 목록 조회
export const useSeminarReviews = (seminarId: number | undefined) => {
  return useQuery<ReviewListResponse>({
    queryKey: [QUERY_KEYS.ADMIN_SEMINAR_REVIEWS, seminarId],
    queryFn: () => getSeminarReview(seminarId!),
    enabled: !!seminarId,
  });
};
