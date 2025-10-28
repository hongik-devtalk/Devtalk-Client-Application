import { useMemo } from 'react';
import { Select } from '@headlessui/react';
import dropdown from '/src/assets/icons/common/dropdown.svg';

interface SeminaNumDropdownProps {
  options: number[];
  selected: number | null;
  onChange: (value: string) => void;
}

const SeminaNumDropdown = ({ options, selected, onChange }: SeminaNumDropdownProps) => {
  const sortedOptions = useMemo(() => {
    return [
      '없음',
      ...options
        .slice()
        .sort((a, b) => b - a)
        .map(String),
    ];
  }, [options]);

  const displayValue = selected === null ? '없음' : String(selected);

  return (
    <div className="relative">
      <Select
        className="w-full h-[66px] appearance-none rounded-8 bg-grey-700 text-grey-300 px-24 py-20 text-semibold
              focus:not-data-focus:outline-none"
        value={displayValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {sortedOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      <img src={dropdown} className="w-[23px] h-[16px] absolute right-[24px] top-[24px] group" />
    </div>
  );
};
export default SeminaNumDropdown;
