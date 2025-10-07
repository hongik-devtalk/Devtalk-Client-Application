import SingleSpeakerForm from './SingleSpeakerForm';
import type { SpeakerState, SeminarState } from '../../../../types/SeminarManage/seminar.state';

interface SpeakerFormProps {
  speakers: SpeakerState[];
  onChange: (updatedSpeakers: SpeakerState[]) => void;
  updatePendingFiles: (data: Partial<SeminarState['pendingFiles']>) => void;
}

const SpeakerForm = ({ speakers, onChange, updatePendingFiles }: SpeakerFormProps) => {
  const handleSpeakerChange = (
    index: number,
    field: keyof SpeakerState,
    value: string | File | null
  ) => {
    const updatedSpeakers = speakers.map((speaker, i) =>
      i === index ? { ...speaker, [field]: value } : speaker
    );
    onChange(updatedSpeakers);

    // 프로필 사진은 pendingFiles에도 저장
    if (field === 'profileUrl' && value instanceof File) {
      const speakerId = speakers[index].speakerId;
      if (speakerId) {
        updatePendingFiles({
          speakerProfiles: new Map([[speakerId, value]]),
        });
      }
    } else if (field === 'profileUrl' && value === null) {
      // 파일 제거 시
      const speakerId = speakers[index].speakerId;
      if (speakerId) {
        updatePendingFiles({
          speakerProfiles: new Map([[speakerId, null]]),
        });
      }
    }
  };

  return (
    <div className="bg-grey-900 p-6 rounded-10">
      <h2 className="heading-2-bold text-white mb-6">연사진 정보</h2>
      <div className="space-y-[64px]">
        {speakers.map((speaker, index) => (
          <SingleSpeakerForm
            key={index}
            partNumber={index + 1}
            speakerData={speaker}
            onChange={(field, value) => handleSpeakerChange(index, field, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeakerForm;
