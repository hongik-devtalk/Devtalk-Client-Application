import type { ReviewData } from '../../types/SeminarManage/seminarReview.api';
import type { SeminarDetailState } from '../../types/SeminarManage/seminar.state';

interface UseReviewActionsProps {
  currentState: SeminarDetailState | null;
  reviews: ReviewData[];
  updateReviews: (reviews: ReviewData[]) => void;
  setInitialState: (state: SeminarDetailState) => void;
}

export const useReviewActions = ({
  currentState,
  reviews,
  updateReviews,
  setInitialState,
}: UseReviewActionsProps) => {
  // 후기의 홈 화면 등록 핸들러
  const handleRegisterReviewToHome = (reviewId: number) => {
    if (!currentState) return;

    const updatedReviews = reviews.map((review) =>
      review.reviewId === reviewId ? { ...review, isFeatured: true } : review
    );
    updateReviews(updatedReviews);
  };

  // 후기의 홈 화면 등록 해제 핸들러
  const handleUnregisterReviewFromHome = (reviewId: number) => {
    if (!currentState) return;

    const updatedReviews = reviews.map((review) =>
      review.reviewId === reviewId ? { ...review, isFeatured: false } : review
    );
    updateReviews(updatedReviews);
  };

  // 후기 삭제 핸들러
  const handleDeleteReview = (reviewId: number) => {
    if (!currentState) return;

    const updatedReviews = reviews.filter((review) => review.reviewId !== reviewId);
    updateReviews(updatedReviews);
    // 원본 데이터도 함께 업데이트해서 수정하기 버튼이 활성화되지 않도록 
    if (currentState) {
      const newState = { ...currentState } as SeminarDetailState;
      setInitialState(newState);
    }

    console.log(`${reviewId}번 후기가 삭제되었습니다.`);
  };

  return {
    handleRegisterReviewToHome,
    handleUnregisterReviewFromHome,
    handleDeleteReview,
  };
};
