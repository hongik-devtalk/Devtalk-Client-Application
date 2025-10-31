import AdminList from '../../../components/admin/auth-manage/AdminList';

const Accounts = () => {
  return (
    <div className="space-y-40 mx-60 mb-[175px]">
      <div className="flex items-center justify-between">
        <h1 className="mt-60 heading-1-bold text-white">관리자 아이디 관리</h1>
        <button
          onClick={() => {}}
          className="w-[175px] h-[52px] mt-60 rounded-8 heading-3-semibold flex items-center justify-center bg-green-300 text-black hover:opacity-80 hover:cursor-pointer"
        >
          아이디 추가하기
        </button>
      </div>
      <AdminList />
    </div>
  );
};

export default Accounts;
