import { useState } from 'react';

interface ToggleFieldProps {
  fieldName: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const ToggleField = ({ fieldName, isEnabled, onToggle }: ToggleFieldProps) => {
  const [exposure, setExposure] = useState(isEnabled);

  const handleToggle = () => {
    setExposure((prev) => !prev);
    onToggle();
  };

  return (
    <div
      className="w-full min-w-[650px] mx-auto h-[82px] bg-grey-900 p-6 rounded-10 
      flex flex-row gap-24 items-center"
    >
      <h2 className="heading-2-bold text-white">{fieldName}</h2>
      <button
        className={`relative w-[44px] h-[22px] gap-2 rounded-16 p-2 flex items-center cursor-pointer transition-colors duration-300 
        ${exposure ? 'bg-green-500' : 'bg-grey-500'}
        `}
        onClick={handleToggle}
      >
        <div
          className={`absolute w-[18px] h-[18px] rounded-full bg-white transition-transform duration-300
            ${exposure ? 'translate-x-[22px]' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
};

export default ToggleField;
