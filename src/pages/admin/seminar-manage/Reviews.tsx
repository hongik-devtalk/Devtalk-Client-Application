import { useNavigate, useParams } from 'react-router-dom';
import ChevronLeftIcon from '../../../assets/icons/common/chevronleft.svg';
import type { ReviewData, ReviewListData } from '../../../types/SeminarManage/seminarReview.api';
import { useEffect, useState } from 'react';
import ReviewTable from '../../../components/admin/seminar-manage/Review/ReviewTable';

const mockReviews: ReviewListData = {
  seminarNum: 10,
  review: [
    {
      reviewId: 1,
      name: '데브톡',
      studentId: 'C135339',
      department: ['컴퓨터공학과'],
      grade: '4학년',
      score: 5,
      strength:
        '부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다. 감사합니다.',
      improvement: '부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다. 감사합니다.',
      nextTopic: 'AI',
      isPublic: true,
      isFeatured: true,
    },
    {
      reviewId: 2,
      name: '김데브',
      studentId: 'C135339',
      department: ['컴퓨터과학과', '경영학과'],
      grade: '3학년',
      score: 4,
      strength:
        '궁금했던 부분들을 잘 설명해주셔서 좋았습니다. 질문 또한 잘 받아주셔서 감사했습니다',
      improvement: '부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다. 감사합니다.',
      nextTopic: '보안',
      isPublic: false,
      isFeatured: false,
    },
  ],
};

const Reviews = () => {
  const navigate = useNavigate();
  const { id: seminarId } = useParams<{ id: string }>();
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  useEffect(() => {
    setReviews(mockReviews.review);
  }, [seminarId]);

  const handleToggle = (reviewId: number, newStatus: boolean) => {
    setReviews((currenReviews) =>
      currenReviews.map((r) => (r.reviewId === reviewId ? { ...r, isFeatured: newStatus } : r))
    );
  };

  return (
    <div className="mx-60 my-40">
      <div className="flex gap-10 items-center mb-10">
        <button onClick={() => navigate(-1)}>
          <img src={ChevronLeftIcon} className="cursor-pointer" />
        </button>
        <h1 className="heading-1-bold text-white">{`${mockReviews.seminarNum}회차 후기 목록`}</h1>
      </div>

      <ReviewTable reviews={reviews} handleToggle={handleToggle} />
    </div>
  );
};

export default Reviews;
