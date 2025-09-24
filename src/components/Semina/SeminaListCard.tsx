import { ChipSeminar } from '../Chip/ChipSeminar';

const SeminaListCard = () => {
  return (
    <div className="w-[335px] h-[263px] pt-20 pb-24 gap-20 flex flex-col">
      <div className="h-[93px] flex flex-col gap-12">
        <ChipSeminar />
        <div className="heading-3-semibold text-white">
          세미나 제목 영역입니다 <br /> 세미나 제목 영역입니다아아
        </div>
      </div>
      <div className="h-[106px] flex flex-row gap-16">
        <img src="/" alt="seminar Img" className="w-[150px] h-[106px] rounded-8" />
        <div className="h-[68px] flex flex-col gap-8 justify-between body-2-medium">
          <div className="flex flex-row gap-20 ailgn-start">
            <div className="text-grey-300 whitespace-nowrap">일정</div>
            <div className="text-grey-400">
              2025. 10. 04.(토) <br /> 오후 7:00
            </div>
          </div>
          <div className="flex flex-row gap-20 ailgn-start">
            <div className="text-grey-300">장소</div>
            <div className="text-grey-400">가나다라마바사</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminaListCard;
