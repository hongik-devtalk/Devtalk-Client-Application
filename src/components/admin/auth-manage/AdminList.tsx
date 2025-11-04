import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import AuthDeleteModal from '../auth-manage/AuthDeleteModal';
import { useAdminAccountList } from '../../../hooks/AuthManage/useAdminAccountList';
import { useDeleteAdminAccount } from '../../../hooks/AuthManage/useDeleteAdminAccount';
import axios from 'axios';
import type { AdminAccount } from '../../../types/auth';

const AdminList = () => {
  const { data, isLoading, isError } = useAdminAccountList();
  const deleteMutation = useDeleteAdminAccount();
  const admins = data?.adminIdList ?? [];

  const [modalOpen, setModalOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminAccount | null>(null);

  // 우클릭 메뉴 처리
  const handleContextMenu = useCallback((e: React.MouseEvent, admin: AdminAccount) => {
    e.preventDefault(); // 기본 컨텍스트 메뉴 방지
    setContextMenu({ x: e.clientX, y: e.clientY });
    setSelectedAdmin(admin);
  }, []);

  const handleDelete = async (adminId: number) => {
    try {
      await deleteMutation.mutateAsync(adminId);
      toast.success('관리자 권한을 삭제했어요.');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        const serverMsg = (e.response?.data as any)?.message;
        if (status === 403) {
          toast.error(serverMsg || '삭제 권한이 없습니다. 관리자 권한을 확인해주세요.');
        } else if (status === 401) {
          toast.error('인증이 만료되었어요. 다시 로그인해주세요.');
        } else {
          toast.error(serverMsg || '관리자 권한 삭제에 실패했어요.');
        }
      } else {
        toast.error('알 수 없는 오류가 발생했어요.');
      }
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="w-full bg-grey-900 text-white rounded-10 overflow-hidden p-40 text-center">
        <p className="body-1-medium text-grey-300">로딩 중...</p>
      </div>
    );
  }

  // 에러 상태
  if (isError) {
    return (
      <div className="w-full bg-grey-900 text-white rounded-10 overflow-hidden p-40 text-center">
        <p className="body-1-medium text-status-error">관리자 목록을 불러오는데 실패했습니다.</p>
      </div>
    );
  }

  // 데이터가 없는 경우
  if (admins.length === 0) {
    return (
      <div className="w-full bg-grey-900 text-white rounded-10 overflow-hidden p-40 text-center">
        <p className="body-1-medium text-grey-300">등록된 관리자가 없습니다.</p>
      </div>
    );
  }

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
          {admins.map((admin, index) => (
            <tr
              key={admin.adminId}
              onContextMenu={(e) => handleContextMenu(e, admin)}
              className="subhead-1-medium border-t border-grey-700 hover:bg-grey-800 transition-colors"
            >
              <td className="py-20 px-20 text-center">{String(index + 1).padStart(2, '0')}</td>
              <td className="py-20 px-24">{admin.name}</td>
              <td className="py-20 px-24">{admin.loginId}</td>
              <td
                className="py-20 px-[44px] text-center text-status-error hover:text-shadow-status-error cursor-pointer"
                onClick={() => {
                  setSelectedAdmin(admin);
                  setModalOpen(true);
                }}
              >
                삭제
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedAdmin && (
        <AuthDeleteModal
          open={modalOpen}
          adminId={selectedAdmin.loginId}
          adminName={selectedAdmin.name}
          onConfirm={() => {
            if (!deleteMutation.isPending) {
              handleDelete(selectedAdmin.adminId);
              setModalOpen(false);
              setContextMenu(null);
            }
          }}
          onCancel={() => setModalOpen(false)}
        />
      )}

      {/* 우클릭 메뉴 */}
      {contextMenu && selectedAdmin && (
        <div
          className="fixed bg-grey-800 rounded-8 shadow-lg py-8 z-50 hover:bg-grey-700"
          style={{
            left: contextMenu.x,
            top: contextMenu.y,
          }}
        >
          <button
            className="w-full px-16 py-12 text-left text-status-error body-2-medium cursor-pointer"
            onClick={() => {
              setModalOpen(true);
              setContextMenu(null);
            }}
          >
            관리자 권한 삭제
          </button>
        </div>
      )}

      {/* 배경 클릭시 컨텍스트 메뉴 닫기 */}
      {contextMenu && <div className="fixed inset-0 z-40" onClick={() => setContextMenu(null)} />}
    </div>
  );
};

export default AdminList;
