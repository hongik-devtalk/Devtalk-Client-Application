import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type {
  SeminarDetailResponse,
  UpdateSeminarRequest,
  UpdateSeminarFilesRequest,
} from '../../../types/SeminarManage/seminarDetail.api';

import {
  deleteSeminar,
  getSeminarDetail,
  updateSeminar,
  updateSeminarFiles,
} from '../../../apis/SeminarDetail/seminarDetailApi';
import { QUERY_KEYS } from '../../../constants/queryKey';

// 세미나 상세 조회
export const useSeminarDetail = (seminarId: number | undefined) => {
  return useQuery<SeminarDetailResponse>({
    queryKey: [QUERY_KEYS.ADMIN_SEMINAR_DETAILS, seminarId],
    queryFn: () => getSeminarDetail(seminarId!),
    enabled: !!seminarId,
  });
};

// 세미나 삭제
export const useSeminarDelete = (seminarId: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (seminarId: number) => deleteSeminar(seminarId),
    onSuccess: () => {
      if (seminarId) {
        queryClient.removeQueries({
          queryKey: [QUERY_KEYS.ADMIN_SEMINAR_DETAILS, seminarId],
        });
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ADMIN_SEMINAR_CARDS, seminarId] });
      }
    },
  });
};

// 세미나 기본 정보 수정
export const useSeminarUpdate = (seminarId: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateSeminarRequest) => updateSeminar(seminarId!, data),
    onSuccess: () => {
      if (seminarId) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ADMIN_SEMINAR_DETAILS, seminarId],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ADMIN_SEMINAR_CARDS],
        });
      }
    },
  });
};

// 세미나 파일 수정
export const useSeminarFilesUpdate = (seminarId: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: Omit<UpdateSeminarFilesRequest, 'seminarId'>) =>
      updateSeminarFiles(seminarId!, params),
    onSuccess: () => {
      if (seminarId) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ADMIN_SEMINAR_DETAILS, seminarId],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ADMIN_SEMINAR_CARDS],
        });
      }
    },
  });
};
