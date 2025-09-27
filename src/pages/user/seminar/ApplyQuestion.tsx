import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import SpeakerCard from '../../../components/SeminarApply/SpeakerCard';
import AutoResizeTextarea from '../../../components/SeminarApply/AutoResizeTextarea';

const ApplyQuestion = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        <ApplyHeader backTo="/seminar/apply-info" />
        <div className="flex flex-col gap-32">
          {/*문구 */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex flex-row gap-4">
              <div className="heading-2-bold text-gradient">(선택)</div>
              <div className="heading-2-bold text-white">사전 질문란</div>
            </div>
            <div className="body-2-medium text-grey-300">
              연사님께서 질문 선별 후, Q&A 시간에 답변 드립니다.
            </div>
          </div>
          <div className="flex flex-col gap-16">
            {/* 연사 카드 */}
            <SpeakerCard />
            {/* 입력창 */}
            <AutoResizeTextarea />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyQuestion;
