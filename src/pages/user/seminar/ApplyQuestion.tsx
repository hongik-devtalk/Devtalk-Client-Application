import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import SpeakerCard from '../../../components/SeminarApply/SpeakerCard';

const ApplyQuestion = () => {
  return (
    <div className="flex flex-col">
      <ApplyHeader backTo="/seminar/apply-info" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1 px-5">
          <div className="flex flex-row gap-1">
            <div className="heading-2-bold text-gradient">(선택)</div>
            <div className="heading-2-bold text-white">사전 질문란</div>
          </div>
          <div className="body-2-medium text-grey-300">
            연사님께서 질문 선별 후, Q&A 시간에 답변 드립니다.
          </div>
        </div>
        <SpeakerCard />
      </div>
    </div>
  );
};

export default ApplyQuestion;
