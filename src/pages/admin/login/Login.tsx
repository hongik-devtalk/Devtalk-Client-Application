import devlogo from '../../../assets/logos/devlogo.svg';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-60">
      {/* 로고 + 타이틀 */}
      <div className="flex items-center gap-x-8 mb-12 ">
        <img src={devlogo} alt="devlogo" className="w-[100px] h-[41.1px]" />
        <h1 className="heading-1-bold">Devtalk Admin</h1>
      </div>

      {/* 설명문 */}
      <p className="subhead-medium text-gray-300 mb-[70px]">
        관리자 아이디와 비밀번호를 입력해주세요.
      </p>

      {/* 입력폼 */}
      <div className="flex flex-col gap-y-12 w-[442px]">
        <input
          className="bg-grey-600 w-full h-[55px] p-12 rounded-8"
          type="text"
          placeholder="아이디를 입력하세요."
        />
        <input
          className="bg-grey-600 w-full h-[55px] p-12 rounded-8"
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
      </div>
      {/* 버튼 */}
      <div className="w-[442px] mt-60 flex items-center justify-center">
        <button className="bg-green-300 text-black w-full h-[62px] rounded-8">관리자 로그인</button>
      </div>
    </div>
  );
};

export default Login;
