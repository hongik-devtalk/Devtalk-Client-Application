const AdminList = () => {
  const admins = [
    { id: 1, name: '데브톡', username: 'devtalk1' },
    { id: 2, name: '김데브', username: 'deeev2' },
    { id: 3, name: '이데브', username: 'deeev3' },
    { id: 4, name: '박데브', username: 'deeev4' },
    { id: 5, name: '최데브', username: 'deeev5' },
    { id: 6, name: '정데브', username: 'deeev6' },
    { id: 7, name: '안데브', username: 'deeev7' },
    { id: 8, name: '강데브', username: 'deeev8' },
    { id: 9, name: '인데브', username: 'deeev9' },
    { id: 10, name: '임데브', username: 'deeevvvvvv' },
    { id: 11, name: '장데브', username: 'dee' },
    { id: 12, name: '손데브', username: 'deeevasfd' },
  ];

  return (
    <div className="w-full bg-grey-900 text-white rounded-10 overflow-hidden">
      <table className="w-full text-left border-collapse">
        {/* 헤더 */}
        <thead>
          <tr className="bg-grey-700 text-grey-200 subhead-1-medium">
            <th className="w-[80px] py-20 px-[26px] text-center">No.</th>
            <th className="max-w-[415px] py-20 px-24">이름</th>
            <th className="py-20 px-24">아이디</th>
            <th className="w-[120px] py-20 px-[44px] text-center">관리</th>
          </tr>
        </thead>

        {/* 바디 */}
        <tbody>
          {admins.map((admin) => (
            <tr
              key={admin.id}
              className="subhead-1-medium border-t border-grey-700 hover:bg-grey-800 transition-colors"
            >
              <td className="py-20 px-20 text-center">{admin.id}</td>
              <td className="py-20 px-24">{admin.name}</td>
              <td className="py-20 px-24">{admin.username}</td>
              <td className="py-20 px-[44px] text-center text-status-error hover:text-shadow-status-error cursor-pointer">
                삭제
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
