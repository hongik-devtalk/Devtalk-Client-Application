import { useState, useEffect } from 'react';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import {
  useHomeLink,
  usePostHomeLink,
  useDeleteHomeLink,
} from '../../../hooks/HomeManage/useHomeLink';
import { useHomeFAQ, usePostHomeFAQ, useDeleteHomeFAQ } from '../../../hooks/HomeManage/useHomeFAQ';

const Links = () => {
  // 문의하기 링크 state
  const [link, setLink] = useState('');
  const [originalLink, setOriginalLink] = useState('');

  // FAQ 링크 state
  const [faqLink, setFaqLink] = useState('');
  const [originalFaqLink, setOriginalFaqLink] = useState('');

  // 문의하기 커스텀 훅
  const { data, isLoading } = useHomeLink();
  const postMutation = usePostHomeLink();
  const deleteMutation = useDeleteHomeLink();

  // FAQ 관련 훅
  const { data: faqData, isLoading: isLoadingFAQ } = useHomeFAQ();
  const postMutationFAQ = usePostHomeFAQ();
  const deleteMutationFAQ = useDeleteHomeFAQ();

  // 문의하기 링크 초기화
  useEffect(() => {
    if (data?.result?.url) {
      setLink(data.result.url);
      setOriginalLink(data.result.url);
    } else {
      setLink('');
      setOriginalLink('');
    }
  }, [data]);

  // FAQ 링크 초기화
  useEffect(() => {
    if (faqData?.result?.url) {
      setFaqLink(faqData.result.url);
      setOriginalFaqLink(faqData.result.url);
    } else {
      setFaqLink('');
      setOriginalFaqLink('');
    }
  }, [faqData]);

  // 문의하기 링크 저장
  const handleSave = () => {
    if (!link.trim()) {
      deleteMutation.mutate();
    } else {
      postMutation.mutate({ url: link });
    }
  };

  // FAQ 링크 저장
  const handleFaqSave = () => {
    if (!faqLink.trim()) {
      deleteMutationFAQ.mutate();
    } else {
      postMutationFAQ.mutate({ url: faqLink });
    }
  };

  // 링크에 변경 사항 있을 때만 버튼 활성화
  const isModified = link !== originalLink;
  const isFaqModified = faqLink !== originalFaqLink;

  if (isLoading || isLoadingFAQ) return <LoadingSpinner />;

  return (
    <div className="space-y-40 mx-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">링크 관리</h1>
      <div className="w-full min-w-[650px] mx-auto bg-grey-900 p-6 rounded-10 space-y-24">
        <h2 className="heading-2-bold text-white mb-24">문의하기 링크</h2>
        <textarea
          placeholder="링크를 입력해주세요."
          className="w-full bg-grey-700 rounded-8 px-16 py-12 text-white placeholder-grey-300
             focus:outline-none focus:border focus:border-green-300
             resize-none overflow-hidden border border-transparent transition-colors duration-200"
          rows={1}
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSave();
            }
          }}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
          }}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={handleSave}
            disabled={!isModified || postMutation.isPending || deleteMutation.isPending}
            className={`w-[140px] aspect-[175/52] px-[50px] py-[12px] rounded-8 subhead-1-semibold flex items-center justify-center transition-opacity duration-200
              ${
                !isModified
                  ? 'bg-grey-600 text-grey-400 cursor-not-allowed'
                  : 'bg-green-300 text-black hover:opacity-80 hover:cursor-pointer'
              }`}
          >
            저장
          </button>
        </div>
      </div>
      <div className="w-full min-w-[650px] mx-auto bg-grey-900 p-6 rounded-10 space-y-24">
        <h2 className="heading-2-bold text-white mb-24">FAQ 링크</h2>
        <textarea
          placeholder="링크를 입력해주세요."
          className="w-full bg-grey-700 rounded-8 px-16 py-12 text-white placeholder-grey-300
             focus:outline-none focus:border focus:border-green-300
             resize-none overflow-hidden border border-transparent transition-colors duration-200"
          rows={1}
          value={faqLink}
          onChange={(e) => setFaqLink(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleFaqSave();
            }
          }}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
          }}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={handleFaqSave}
            disabled={!isFaqModified || postMutationFAQ.isPending || deleteMutationFAQ.isPending}
            className={`w-[140px] aspect-[175/52] px-[50px] py-[12px] rounded-8 subhead-1-semibold flex items-center justify-center transition-opacity duration-200
              ${
                !isFaqModified
                  ? 'bg-grey-600 text-grey-400 cursor-not-allowed'
                  : 'bg-green-300 text-black hover:opacity-80 hover:cursor-pointer'
              }`}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;
