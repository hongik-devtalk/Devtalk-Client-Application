import { useState } from 'react';
import AdminList from '../../../components/admin/auth-manage/AdminList';
import ArrowIcon from '../../../assets/icons/components/SeminarApply/arrow.svg';

const AddAdminForm = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = name.trim() !== '' && userId.trim() !== '' && password.trim() !== '';

  return (
    <div className="text-white">
      <div className="flex flex-col gap-10 max-w-[490px] w-full mx-auto">
        {/* 이름 */}
        <div>
          <label className="heading-2-semibold block mb-8">이름</label>
          <input
            type="text"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-8 bg-grey-700 py-20 px-24 placeholder-grey-400 subhead-1-medium text-grey-50 outline-none focus:ring-1 focus:ring-grey-300"
          />
        </div>

        {/* 계정 */}
        <div>
          <label className="heading-2-semibold block mb-8">계정</label>
          <input
            type="text"
            placeholder="아이디를 입력하세요."
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full rounded-8 bg-grey-700 py-20 px-24 mb-12 placeholder-grey-400 subhead-1-medium text-grey-50 outline-none focus:ring-1 focus:ring-grey-300"
          />
          <input
            type="text" //가입 시에는 보이도록 text로 두는 것이 나은지 password로 두는 것이 나은지 고민..
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-8 bg-grey-700 py-20 px-24 placeholder-grey-400 subhead-1-medium text-grey-50 outline-none focus:ring-1 focus:ring-grey-300"
          />
        </div>

        {/* 버튼 */}
        <button
          disabled={!isFormValid}
          className={`w-full mt-48 py-[18px] rounded-8 heading-3-semibold transition-all duration-300
    ${
      isFormValid
        ? 'text-black cursor-pointer bg-green-300 hover:[background-image:var(--gradient-graphic)]'
        : 'bg-grey-200 text-grey-700 cursor-not-allowed opacity-60'
    }`}
        >
          관리자 아이디 추가하기
        </button>
      </div>
    </div>
  );
};

const Accounts = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="space-y-40 mx-60 mb-[175px]">
      {/* 상단 헤더 영역 */}
      <div className="flex items-center justify-between mt-60">
        {isAdding ? (
          <div className="flex items-center gap-20">
            <button
              onClick={() => setIsAdding(false)}
              className="text-grey-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <img src={ArrowIcon} alt="뒤로가기" className="w-24 h-24" />
            </button>
            <h1 className="heading-1-bold text-white">관리자 아이디 추가하기</h1>
          </div>
        ) : (
          <>
            <h1 className="heading-1-bold text-white">관리자 아이디 관리</h1>
            <button
              onClick={() => setIsAdding(true)}
              className="w-[175px] h-[52px] rounded-8 heading-3-semibold flex items-center justify-center bg-green-300 text-black hover:opacity-80 hover:cursor-pointer"
            >
              아이디 추가하기
            </button>
          </>
        )}
      </div>

      {/* 본문 영역 */}
      {isAdding ? <AddAdminForm /> : <AdminList />}
    </div>
  );
};

export default Accounts;
