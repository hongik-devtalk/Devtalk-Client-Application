import { useEffect, useRef, useState } from 'react';

function AutoResizeTextarea() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  const resize = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    const newH = Math.min(el.scrollHeight, 690);
    el.style.height = `${Math.max(newH, 174)}px`;
    el.style.overflowY = el.scrollHeight > 690 ? 'auto' : 'hidden';
  };

  useEffect(() => {
    resize();
  }, [value]);

  return (
    <div className="relative mx-5 rounded-8 bg-grey-800 focus-within:ring-2 focus-within:ring-primary justify-center">
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onInput={resize}
        placeholder="[김데브] 연사님께 드리고 싶은 질문을 자유롭게 남겨주세요."
        maxLength={500}
        className="w-full resize-none bg-transparent outline-none rounded-8
                   p-4 pb-10 body-2-medium text-white placeholder-grey-400
                   box-border"
        style={{ minHeight: 174, maxHeight: 690 }}
      />
      {/* 안내 문구 (absolute 배치, bottom에서 16px 위) */}
      <span className="absolute right-4 bottom-4 caption-medium text-grey-500">
        최대 500자(공백 포함)
      </span>
    </div>
  );
}

export default AutoResizeTextarea;
