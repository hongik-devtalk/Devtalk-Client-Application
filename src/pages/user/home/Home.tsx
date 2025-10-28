import Cta from '../../../components/common/Cta';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/Header';
import SeminarPoster from '../../../components/common/SeminarPoster';
import IntroDevtalk from '../../../assets/images/introDevtalk.svg';
import ReviewCard from '../../../components/common/ReviewCard';
import ExSeminar from '../../../assets/images/exSeminar.jpg';
import { ButtonExSeminar } from '../../../components/Button/ButtonExSeminar';
import Timer from '../../../assets/icons/common/devtalkTimer.png';
import Ticket from '../../../assets/icons/common/devtalkTicket.png';
import { Button } from '../../../components/Button/Button';
import Carousel from '../../../components/LectureCard/Carousel';
import { LectureCardMain } from '../../../components/LectureCard/LectureCardMain';
import { LectureCardSpeaker } from '../../../components/LectureCard/LectureCardSpeaker';
import { LectureCardSession } from '../../../components/LectureCard/LectureCardSession';
import { useNavigate } from 'react-router-dom';
import InfiniteCarousel from '../../../components/common/InfiniteCarousel';
import { useEffect, useRef, useState } from 'react';
import { useShowSeminar } from '../../../contexts/ShowSeminarContext';
import BackgroundVideo from '../../../components/common/BackgroundVideo';

const Home = () => {
  const navigate = useNavigate();
  const exSeminarRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [hideCTA, setHideCTA] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const { seminarId, seminarNum, liveActivate, applicantActivate, isLoading } = useShowSeminar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const shouldHide = entries.some((entry) => entry.isIntersecting);
        setHideCTA(shouldHide);
      },
      { threshold: 0.3 }
    );

    if (exSeminarRef.current) observer.observe(exSeminarRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => {
      if (exSeminarRef.current) observer.unobserve(exSeminarRef.current);
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, []);

  // CTA 렌더 조건
  let ctaElement = null;
  if (applicantActivate && liveActivate) {
    ctaElement = (
      <Cta
        bodyText="지금 바로 입장해 주세요!"
        buttonText={`${seminarNum ?? ''}회차 세미나 입장하기`}
        onClick={() => navigate('seminar/live/verification')}
        isActive
      />
    );
  } else if (applicantActivate && !liveActivate) {
    ctaElement = (
      <Cta
        bodyText="데브톡에 빠져보세요!"
        buttonText={`${seminarNum ?? ''}회차 세미나 신청하기`}
        onClick={() => navigate('/seminar/apply-info')}
        isActive={false}
      />
    );
  } else if (!applicantActivate && liveActivate) {
    ctaElement = (
      <Cta
        bodyText="지금 바로 입장해 주세요!"
        buttonText={`${seminarNum ?? ''}회차 세미나 입장하기`}
        onClick={() => navigate('seminar/live/verification')}
        isActive
      />
    );
  }

  return (
    <>
      <div>
        <Header hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />

        <div className="snap-y snap-proximity overflow-y-scroll h-screen scrollbar-hide overflow-x-hidden">
          <div className="snap-center relative w-[376px] h-[585px] mx-auto pt-[56px]">
            <BackgroundVideo />
            <div className="relative z-10">
              <SeminarPoster />
            </div>
          </div>

          {!hideCTA && !hamburgerOpen && !isLoading && ctaElement && (
            <div className="fixed bottom-0 w-full z-50">{ctaElement}</div>
          )}

          {/* 강연 소개 카드 */}
          <div className="flex flex-col pt-80 gap-32">
            <div className="text-white heading-2-semibold px-20 snap-none">
              다가오는 세미나 강연 소개
            </div>

            <div className="flex flex-col snap-center pb-[80px]">
              <Carousel>
                <LectureCardMain seminarId={seminarId ?? 0} index={0} />
                <LectureCardSpeaker seminarId={seminarId ?? 0} index={0} />
                <LectureCardSession seminarId={seminarId ?? 0} index={0} />
              </Carousel>
            </div>

            <div className="flex flex-col snap-center">
              <Carousel>
                <LectureCardMain seminarId={seminarId ?? 0} index={1} />
                <LectureCardSpeaker seminarId={seminarId ?? 0} index={1} />
                <LectureCardSession seminarId={seminarId ?? 0} index={1} />
              </Carousel>
            </div>
          </div>

          {/* 데브톡 소개 */}
          <div className="flex flex-col pt-[200px] px-20 pb-[92px] snap-none">
            <div className="flex flex-col gap-8 pb-[16px]">
              <p className="text-white heading-2-bold">DevTalk이란?</p>
              <p className="body-1-semibold text-gradient">각자의 경험, 모두의 인사이트</p>
            </div>
            <img
              src={IntroDevtalk}
              alt="DevTalk 소개 이미지"
              className="w-[335px] h-[196px] rounded-8"
            />
            <div className="flex flex-col w-[335px] h-[100px] pt-24 body-1-medium text-grey-300">
              <p>2023년부터 지금까지,</p>
              <p>
                <span className="text-grey-50">약 1,000명의 학생이 선택한 DevTalk Seminar</span>는
              </p>
              <p className="pt-8">IT 실무자의 생생한 인사이트를 공유합니다.</p>
            </div>
          </div>

          {/* 후기 */}
          <div className="flex flex-col px-20 gap-16 pb-[200px] snap-none">
            <p className="text-white heading-2-bold">학우들의 후기</p>
            <div className="-mx-20">
              <InfiniteCarousel>
                <ReviewCard
                  session={9}
                  rating={5}
                  content="요즘 핫한 주제로 강연을 들어서 너무 좋았습니다 !"
                />
                <ReviewCard session={6} rating={5} content="진로 고민에 도움이 되었습니다." />
                <ReviewCard session={9} rating={5} content="실무적 내용을 들을 수 있었어요." />
                <ReviewCard session={8} rating={5} content="라이브 코딩 재밌었어요 ㅋㅋㅋ" />
              </InfiniteCarousel>
            </div>
          </div>

          <div ref={exSeminarRef} className="relative w-[375px] h-[196px] snap-center">
            <img src={ExSeminar} alt="이전 세미나" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(15, 17, 20, 0.90) 0%, rgba(15, 17, 20, 0.10) 100%)',
                backdropFilter: 'blur(0.5px)',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 text-center">
              <p className="text-white heading-3-semibold">과거 데브톡 내용이 궁금하다면?</p>
              <ButtonExSeminar />
            </div>
          </div>

          <div ref={bottomRef} className="w-full h-[1px]" />

          {/* 신청하기 / 입장하기 */}
          {!isLoading && (
            <>
              {liveActivate ? (
                <div className="flex flex-col items-center pt-[120px] px-20 pb-[100px] gap-16">
                  <p className="text-white heading-2-bold">지금 바로 입장하세요!</p>
                  <img src={Ticket} className="w-[240px] h-[153px]" alt="" />
                  <Button
                    variant="default"
                    text={`${seminarNum ?? ''}회차 세미나 입장하기`}
                    onClick={() => navigate('seminar/live/verification')}
                  />
                </div>
              ) : applicantActivate ? (
                <div className="flex flex-col items-center pt-[120px] px-20 pb-[100px] gap-16">
                  <p className="text-white heading-2-bold">지금 바로 신청하세요!</p>
                  <img src={Timer} className="w-[240px] h-[153px]" alt="" />
                  <Button
                    variant="default"
                    text={`${seminarNum ?? ''}회차 세미나 신청하기`}
                    onClick={() => navigate('/seminar/apply-info')}
                  />
                </div>
              ) : null}
            </>
          )}

          <div className="h-[122px] snap-start">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
