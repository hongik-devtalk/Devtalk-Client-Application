import fillStar from '../../assets/icons/components/ReviewCard/fillStar.svg';
import noneStar from '../../assets/icons/components/ReviewCard/nonestar.svg';

const ReviewCard = () => {
  return (
    <div className="w-[335px] h-[157px] bg-grey-800 rounded-8 px-20 py-16 flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <div className="w-[79px] h-[25px] px-8 py-4 rounded-4 bg-grey-900 caption-semibold text-gradient border border-black whitespace-nowrap text-center">
          9회차 세미나
        </div>
        <div className="flex felx-row gap-8 h-[20px]">
          <div className="w-[100px] h-full flex flex-row">
            <img src={fillStar} alt="fillStar" />
            <img src={fillStar} alt="fillStar" />
            <img src={fillStar} alt="fillStar" />
            <img src={fillStar} alt="fillStar" />
            <img src={noneStar} alt="noneStar" />
          </div>
          <div className="w-[26px] h-full gap-2 flex flex-row">
            <div className="body-2-semibold text-white">4</div>
            <div className="body-2-semibold text-grey-500">/5</div>
          </div>
        </div>
      </div>
      <div className="w-full h-60 body-2-medium text-grey-100">
        부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리
        마련해주셔서 정말 재미있고 유익했습니다. 감사합니다.
      </div>
    </div>
  );
};

export default ReviewCard;
