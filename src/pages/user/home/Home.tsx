import Cta from '../../../components/common/Cta';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/Header';
import SeminarPoster from '../../../components/common/SeminarPoster';
import { LectureCardMain } from '../../../components/LectureCard/LectureCardMain';
import IntroDevtalk from '../../../assets/IntroDevtalk.svg';
import ReviewCard from '../../../components/common/ReviewCard';
import ExSeminar from '../../../assets/ExSeminar.jpg';
import { ButtonExSeminar } from '../../../components/Button/ButtonExSeminar';
import Timer from '../../../assets/icons/common/Timer.svg';
import { Button } from '../../../components/Button/Button';

const Home = () => {
  return (
    <>
      <Header />
      <SeminarPoster />
      <Cta />
      {/* 강연 소개 카드 */}
      <div className="flex flex-col pt-80 gap-32 px-20">
        <div className="text-white heading-2-semibold">다가오는 세미나 강연 소개</div>
        <div className="flex flex-col gap-80 items-center">
          <LectureCardMain />
          <LectureCardMain />
        </div>
      </div>

      {/* 데브톡 소개 */}
      <div className="flex flex-col pt-[200px] px-20 pb-[92px]">
        <div className="flex flex-col gap-8 pb-[16px]">
          <p className="text-white heading-2-bold">DevTalk이란?</p>
          <p className="body-1-semibold text-gradient">각자의 경험, 모두의 인사이트</p>
        </div>
        <img
          src={IntroDevtalk}
          alt="DevTalk 소개 이미지"
          className="w-[335px] h-[196px] rounded-8"
        />
        <div className="flex flex-col w-[335px] h-[100px] pt-[24px] body-1-medium text-grey-300">
          <p>2023년부터 지금까지,</p>
          <p>
            <span className="text-grey-50">약 1,000명의 학생이 선택한 DevTalk Seminar</span>는
          </p>
          <p className="pt-8">매 회차 IT 업계 실무자 및 전문 연사 두 분을 초청해</p>
          <p>수업에서 접할 수 없는 생생한 인사이트를 공유합니다.</p>
        </div>
      </div>

      {/* 학우들의 후기 */}
      <div className="flex flex-col px-20 gap-16 pb-[200px]">
        <p className="text-white heading-2-bold">학우들의 후기</p>
        <ReviewCard />
      </div>

      {/* 이전 세미나 알아보기 */}
      <div className="relative w-[375px] h-[196px]">
        {/* 이미지 */}
        <img src={ExSeminar} alt="이전 세미나" className="w-full h-full object-cover" />

        {/* 그라데이션 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15, 17, 20, 0.90) 0%, rgba(15, 17, 20, 0.10) 100%)',
            backdropFilter: 'blur(0.5px)',
          }}
        />

        {/* 텍스트 + 버튼 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 text-center">
          <p className="text-white heading-3-semibold">과거 데브톡 내용이 궁금하다면?</p>
          <ButtonExSeminar />
        </div>
      </div>

      {/* 신청하기 */}
      <div className="flex flex-col items-center pt-[120px] px-20 pb-[100px] gap-28">
        <p className="text-white heading-2-bold">지금 바로 신청하세요!</p>
        <div className="flex flex-col items-center gap-40">
          <img src={Timer} alt="타이머 아이콘" className="w-[91px] h-[108px]" />
          <Button variant="default" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
