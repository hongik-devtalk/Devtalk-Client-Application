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
    // 전체 입력 박스 센터 정렬 (좌우 20px 마진)
    <div className="mx-5 flex justify-center">
      {/* 한 박스: padding 16px, focus 시 박스 전체 하이라이트 */}
      <div
        className="w-full max-w-[680px] rounded-8 bg-grey-800 p-4
                      focus-within:ring-2 focus-within:ring-primary"
      >
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onInput={resize}
          placeholder="[김데브] 연사님께 드리고 싶은 질문을 자유롭게 남겨주세요."
          maxLength={500}
          className="w-full bg-transparent outline-none resize-none rounded-8
                     p-0 body-2-medium text-white placeholder-grey-400
                     box-border"
          style={{ minHeight: 174, maxHeight: 747 }}
        />
        {/* textarea와 8px 간격 */}
        <div className="mt-2 flex justify-end">
          <span className="caption-medium text-grey-500">최대 500자(공백 포함)</span>
        </div>
      </div>
    </div>
  );
}
