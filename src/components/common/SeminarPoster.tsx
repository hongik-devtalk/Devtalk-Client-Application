import seminarPoster from '../../assets/seminarPoster.svg';

const SeminarPoster = () => {
  return (
    <div className="relative w-[376px] h-[480px]">
      {/* 배경 이미지 */}
      <img src={seminarPoster} alt="세미나 포스터" className="w-full h-full object-cover" />

      {/* 텍스트 */}
      <div className="absolute top-0 pt-[32px] pl-[20px] flex flex-col w-[335px] h-[196px] gap-[36px] p-4">
        <div className="flex flex-col gap-[4px]">
          <p className="text-grey-50 subhead-2-medium">10회차</p>
          <p className="heading-1-bold text-gradient">LLM을 파헤치다</p>
        </div>

        <div className="flex gap-[28px]">
          <div className="flex flex-col text-grey-300 body-1-medium">
            <p>대상</p>
            <p>일시</p>
            <p>장소</p>
          </div>
          <div className="flex flex-col text-grey-200 body-1-medium">
            <p>홍익대학교 재학생 (학과/학년 무관)</p>
            <p>2025. 10. 4(토) 오후 6:30~8:30</p>
            <p>홍익대학교 L0201</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarPoster;
