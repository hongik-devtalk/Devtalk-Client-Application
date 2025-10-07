import { useState, useEffect } from 'react';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import HomeReviewItem from '../../../components/admin/home/HomeReviewItem';
import type { Review } from '../../../components/admin/home/HomeReviewItem';
import AdminModal from '../../../components/admin/common/AdminModal';
import {
  useHomeReviews,
  useDeleteHomeReview,
  usePutHomeReviewOrder,
} from '../../../hooks/HomeManage/useHomeReview';

const Reviews = () => {
  const { data, isLoading } = useHomeReviews();
  const deleteMutation = useDeleteHomeReview();
  const putOrderMutation = usePutHomeReviewOrder();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewToRemove, setReviewToRemove] = useState<number | null>(null);

  useEffect(() => {
    if (Array.isArray(data?.result)) {
      const mapped = data.result.map((r, i) => ({
        reviewId: Number(r.reviewId),
        score: r.rating,
        content: r.content,
        createdAt: r.createdAt,
        isPublic: r.visible,
        rank: r.order ?? i + 1,
        department: '-',
        grade: 0,
        nextTopic: '',
      }));
      setReviews(mapped);
    }
  }, [data]);

  const updateRanks = (list: Review[]): Review[] => list.map((r, i) => ({ ...r, rank: i + 1 }));

  const moveUp = (id: number) => {
    setReviews((prev) => {
      const idx = prev.findIndex((r) => r.reviewId === id);
      if (idx > 0) {
        const newArr = [...prev];
        [newArr[idx - 1], newArr[idx]] = [newArr[idx], newArr[idx - 1]];
        const updated = updateRanks(newArr);
        putOrderMutation.mutate({ orderedIds: updated.map((r) => r.reviewId) });
        return updated;
      }
      return prev;
    });
  };

  const moveDown = (id: number) => {
    setReviews((prev) => {
      const idx = prev.findIndex((r) => r.reviewId === id);
      if (idx < prev.length - 1) {
        const newArr = [...prev];
        [newArr[idx], newArr[idx + 1]] = [newArr[idx + 1], newArr[idx]];
        const updated = updateRanks(newArr);
        putOrderMutation.mutate({ orderedIds: updated.map((r) => r.reviewId) });
        return updated;
      }
      return prev;
    });
  };

  // 삭제 클릭 시 모달 오픈
  const handleRemoveClick = (id: number) => {
    setReviewToRemove(id);
    setIsModalOpen(true);
  };

  // 모달에서 '후기 삭제하기' 클릭 시 서버 요청
  const handleConfirmRemove = () => {
    if (reviewToRemove !== null) {
      deleteMutation.mutate(reviewToRemove, {
        onSuccess: () => {
          setReviews((prev) => prev.filter((r) => r.reviewId !== reviewToRemove));
          setIsModalOpen(false);
          setReviewToRemove(null);
        },
      });
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="space-y-40 ml-60 mr-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">후기 관리</h1>
      <div className="w-full max-w-[900px] min-w-[700px] mx-autorounded-10 grid grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.reviewId} className="relative">
            <span className="absolute -top-3 -left-3 bg-grey-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm heading-1-semibold">
              {review.rank}
            </span>
            <HomeReviewItem
              key={review.reviewId}
              review={review}
              onMoveUp={moveUp}
              onMoveDown={moveDown}
              onDelete={handleRemoveClick}
            />
          </div>
        ))}
      </div>

      <AdminModal
        isOpen={isModalOpen}
        variant="deleteReview"
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmRemove}
      />
    </div>
  );
};

export default Reviews;
