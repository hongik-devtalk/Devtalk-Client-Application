import { useEffect, useState } from 'react';
import { getSeminarList } from '../../../apis/seminarList';
import SeminaNumDropdown from '../../../components/admin/home/SeminaNumDropdown';
import ToggleField from '../../../components/admin/home/ToggleField';
import { postShowSemiar } from '../../../apis/HomeManage/showSeminarApi';

const HomeExposure = () => {
  const [seminarList, setSeminarList] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [applyActive, setApplyActive] = useState<boolean>(false);
  const [liveActive, setLiveActive] = useState<boolean>(false);

  const loadSeminarNums = async () => {
    const data = await getSeminarList();
    const seminarNums = data.result?.seminarList.map((s) => Number(s.seminarNum)) ?? [];
    setSeminarList(seminarNums);
  };

  useEffect(() => {
    loadSeminarNums();
  }, []);

  useEffect(() => {
    const sendUpdate = async () => {
      try {
        await postShowSemiar({
          seminarNum: selected,
          applicantActivate: applyActive,
          liveActivate: liveActive,
        });
      } catch (error) {
        console.error('🚨 서버 요청 중 오류 발생:', error);
      }
    };

    sendUpdate();
  }, [selected, applyActive, liveActive]);

  return (
    <div className="space-y-40 mx-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">홈화면 노출 회차</h1>
      <div className="w-full min-w-[650px] h-[172px] mx-auto bg-grey-900 p-6 rounded-10 space-y-24">
        <h2 className="heading-2-bold text-white mb-24">노출 회차 선택</h2>
        <SeminaNumDropdown
          options={seminarList}
          selected={selected}
          onChange={(value) => {
            setSelected(value === '없음' ? null : Number(value));
          }}
        />
      </div>
      <ToggleField
        fieldName="신청 활성화"
        isEnabled={applyActive}
        onToggle={() => {
          setApplyActive((prev) => !prev);
        }}
      />
      <ToggleField
        fieldName="Live 활성화"
        isEnabled={liveActive}
        onToggle={() => {
          setLiveActive((prev) => !prev);
        }}
      />
    </div>
  );
};

export default HomeExposure;
