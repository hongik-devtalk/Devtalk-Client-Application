import SeminaNumDropdown from '../../../components/admin/home/SeminaNumDropdown';
import ToggleField from '../../../components/admin/home/ToggleField';

const HomeExposure = () => {
  const seminarList = [1, 2, 3, 4];
  return (
    <div className="space-y-40 mx-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">홈화면 노출 회차</h1>
      <div className="w-full min-w-[650px] h-[172px] mx-auto bg-grey-900 p-6 rounded-10 space-y-24">
        <h2 className="heading-2-bold text-white mb-24">노출 회차 선택</h2>
        <SeminaNumDropdown options={seminarList} selected={1} onChange={() => {}} />
      </div>
      <ToggleField fieldName="신청 활성화" isEnabled={true} onToggle={() => {}} />
      <ToggleField fieldName="Live 활성화" isEnabled={true} onToggle={() => {}} />
    </div>
  );
};

export default HomeExposure;
