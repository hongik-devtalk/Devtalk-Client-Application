import { useState } from 'react';

interface AddAdminFormProps {
  onSubmit: (data: { name: string; userId: string; password: string }) => void;
}

const AddAdminForm: React.FC<AddAdminFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = name.trim() && userId.trim() && password.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit({ name, userId, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white flex flex-col gap-10 max-w-[490px] w-full mx-auto"
    >
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
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-8 bg-grey-700 py-20 px-24 placeholder-grey-400 subhead-1-medium text-grey-50 outline-none focus:ring-1 focus:ring-grey-300"
        />
      </div>

      {/* 버튼 */}
      <button
        type="submit"
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
    </form>
  );
};

export default AddAdminForm;
