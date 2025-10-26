import sampleSpeaker from '../../assets/images/sampleSpeaker.svg';

type SpeakerCardProps = {
  name: string;
  title: string;
  description: string;
  profileUrl?: string;
};

const SpeakerCard = ({ name, title, description, profileUrl }: SpeakerCardProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[335px] h-[622px] rounded-12 bg-grey-800 gap-5 justify-center">
        <div className="flex flex-col items-center justify-center gap-[18px]">
          <img
            src={profileUrl || sampleSpeaker}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = sampleSpeaker;
            }}
            alt={`${name} 사진`}
            className="rounded-full w-[120px] h-[120px] object-cover"
          />
          <div>
            <div className="flex flex-row gap-1 items-center justify-center">
              <p className="subhead-1-semibold text-grey-200">연사</p>
              <p className="heading-2-semibold text-white">{name}</p>
              <p className="subhead-1-semibold text-grey-200">님</p>
            </div>
            <div className="body-2-medium text-grey-200">{description}</div>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className="text-grey-700 w-[295px]" />
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="heading-3-semibold text-center text-white">{title}</div>
          <div className="body-2-medium text-grey-200 w-[295px]">
            <span className="text-gradient">ChatGPT 3년차</span>, LLM은 더욱 어려운 문제를 해결하
            실제 작업을 수행하는 수준으로 발전했습니다.
            <br />
            <br />
            코딩을 비롯한 다양한 분야에서 인간의 능력을 넘어서고, 연구 보고서도 쓰고, 혼자 티켓
            예약도 할 수 있다는데요.
            <span className="text-gradient">LLM은 어쩌다 이렇게 똑똑해졌을까요?</span>
            <br />
            <br />
            LLM의 놀라운 능력의 비밀,
            <span className="text-gradient">추론(Reasoning)과 에이전트(Agent)</span>라는 핵심
            키워드를 쉽고 명확하게 알아봅시다!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
