import React, { useState, useEffect } from 'react';
import deleteIcon from '../../assets/icons/common/delete.svg';

interface AdminImageUploadProps {
  title: string;
  onUpload: (file: File) => void;
  onRemove: () => void;
}

const AdminImageUpload: React.FC<AdminImageUploadProps> = ({ title, onUpload, onRemove }) => {
  const [file, setFile] = useState<File | null>(null);

  // 파일 처리 (이미지 파일만)
  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }
    setFile(file);
    onUpload(file);
    //API 연동 시 변경 - 서버에 전송하는 로직 추가
  };

  // 파일 삭제
  const handleRemove = () => {
    setFile(null);
    onRemove();

    //API 연동 시 변경 - 서버에 요청하는 로직 추가
  };

  // 클립보드 붙여넣기
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            if (file) handleFile(file);
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  //파일 이름 trim
  const getFileNameWithoutExt = (name: string) => name.replace(/\.[^/.]+$/, '');

  return (
    <div className="w-full max-w-[1030px] bg-grey-900 p-6 rounded-10 space-y-4">
      {/* 제목 */}
      <h2 className="heading-2-bold text-white mb-24">{title}</h2>

      {/* 사진 첨부 박스 */}
      <div
        className="bg-grey-700 rounded-8 flex flex-col p-[73px] items-center justify-center text-center cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
        }}
      >
        <p className="text-white subhead-2-medium mb-24">
          첨부할 사진을 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요.
        </p>
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />
          <span className="w-[175px] h-[52px] px-[50px] py-[12px] bg-green-300 text-black rounded-8 heading-3-semibold flex items-center justify-center">
            파일 선택
          </span>
        </label>
      </div>

      {/* 사진 개수 표시 */}
      <span className="flex items-center gap-1 mt-20 mb-16">
        <span className={file ? 'text-green-300' : 'text-grey-300'}>{file ? '1개' : '0개'}</span>
        <span className="text-grey-300"> / 1개</span>
      </span>

      {/* 사진 정보 박스 */}
      <div className="bg-grey-700 rounded-8 p-24 flex justify-between items-center">
        {file ? (
          <>
            <span className="text-grey-200 subhead-2-medium">
              {getFileNameWithoutExt(file.name)} [{file.type.split('/')[1]},{' '}
              {(file.size / 1024).toFixed(0)}KB]
            </span>
            <button onClick={handleRemove} className="cursor-pointer">
              <img src={deleteIcon} alt="삭제" />
            </button>
          </>
        ) : (
          <span className="text-grey-200">첨부된 파일 없음</span>
        )}
      </div>
    </div>
  );
};

export default AdminImageUpload;
