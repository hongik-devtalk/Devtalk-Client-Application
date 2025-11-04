import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAdminAccount } from '../../apis/authManageApi';
import { QUERY_KEYS } from '../../constants/queryKey';

//관리자 계정 삭제 훅
export const useDeleteAdminAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (adminId: number) => deleteAdminAccount(adminId),
    onSuccess: () => {
      // 목록 리프레시
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ADMIN_ACCOUNT_LIST] });
    },
  });
};
