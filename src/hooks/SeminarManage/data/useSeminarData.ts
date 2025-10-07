import { useSeminarDetail } from './useSeminarDetail';
import { useSeminarReviews } from './useSeminarReviews';
import { mapApiDataToState } from '../../../utils/seminarMapper';

export const useSeminarData = (seminarId: number | undefined) => {
  const {
    data: detailResponse,
    isLoading: isDetailLoading,
    error: detailError,
  } = useSeminarDetail(seminarId);

  const {
    data: reviewResponse,
    isLoading: isReviewLoading,
    error: reviewError,
  } = useSeminarReviews(seminarId);

  const seminarData = detailResponse?.result ? mapApiDataToState(detailResponse.result) : null;

  const reviews = reviewResponse?.result || [];

  return {
    seminarData,
    reviews,
    isLoading: isDetailLoading || isReviewLoading,
    error: detailError || reviewError,
  };
};
