import { useEffect, useRef, useState } from 'react';

export default function AutoResizeTextarea() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  const resize = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    const newH = Math.min(el.scrollHeight, 747);
    el.style.height = `${Math.max(newH, 174)}px`; // 174 ~ 690px
    el.style.overflowY = el.scrollHeight > 747 ? 'auto' : 'hidden';
  };

  useEffect(() => {
    resize();
  }, [value]);

  return (
    <div className="mx-5 flex justify-center">
      <div
        className="w-full max-w-[680px] rounded-8 bg-grey-800 p-4
             flex flex-col gap-2
             focus-within:ring-1 focus-within:ring-grey-600"
      >
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onInput={resize}
          placeholder={`[김데브] 연사님께 드리고 싶은 질문을
자유롭게 남겨주세요.`}
          maxLength={500}
          className="w-full bg-transparent outline-none resize-none rounded-8
                     p-4 body-1-medium text-grey-50 placeholder-grey-300
                     box-border"
          style={{ minHeight: 174, maxHeight: 747 }}
        />
        <div className="px-2 py-2 flex justify-end">
          <span className="caption-medium text-grey-400">최대 500자(공백 포함)</span>
        </div>
      </div>
    </div>
  );
}
