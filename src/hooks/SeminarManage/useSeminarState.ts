import { useState, useEffect } from 'react';
import { useSeminarDetail } from './useSeminarDetail';
import { useSeminarReviews } from './useSeminarReviews';
import type { ReviewData } from '../../types/SeminarManage/seminarReview.api';
import type {
  SeminarState,
  SeminarDetailState,
  SpeakerState,
  FormErrors,
} from '../../types/SeminarManage/seminar.state';
import { mapApiDataToState } from '../../utils/seminarMapper';

const blankSpeakerState: SpeakerState = {
  name: '',
  organization: '',
  history: '',
  sessionTitle: '',
  sessionContent: '',
  profileUrl: null,
  profileFileName: null,
};

const blankData: SeminarDetailState = {
  seminarNum: null,
  seminarDate: '',
  place: '',
  topic: '',
  liveLink: '',
  thumbnailUrl: null,
  thumbnailFileName: null,
  materials: [],
  speakers: [blankSpeakerState, blankSpeakerState],
  seminarStartDate: new Date(),
  seminarEndDate: new Date(),
  applicationStartDate: new Date(),
  applicationEndDate: new Date(),
};

export const useSeminarState = (id: string | undefined) => {
  const seminarId = Number(id) || undefined;

  const {
    data: detailResponse,
    isLoading: isDetailLoading,
    error: detailError,
  } = useSeminarDetail(seminarId);
  const {
    data: reviewResponse,
    isLoading: isReviewLoading,
    error: reviewError,
  } = useSeminarReviews(seminarId);

  const [state, setState] = useState<SeminarState>({
    initialState: null,
    currentState: null,
    reviews: [],
    isLoading: true,
    error: null,
    isDirty: false,
    validationErrors: {},
    activationError: { seminar: '', application: '' },
    pendingFiles: {
      thumbnail: null,
      materials: [],
      speakerProfiles: new Map(),
    },
  });

  // 세미나 상세 정보 로딩
  useEffect(() => {
    if (!id) {
      setState((prev) => ({
        ...prev,
        initialState: blankData,
        currentState: blankData,
        isLoading: false,
      }));
      return;
    }

    if (isDetailLoading) {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      return;
    }

    if (detailError) {
      setState((prev) => ({
        ...prev,
        error: '세미나 정보를 불러오는 데 실패했습니다.',
        isLoading: false,
      }));
      return;
    }

    if (detailResponse?.result) {
      const formattedData = mapApiDataToState(detailResponse.result);
      setState((prev) => ({
        ...prev,
        initialState: formattedData,
        currentState: formattedData,
        isLoading: prev.isLoading && isReviewLoading,
      }));
    }
  }, [id, detailResponse, isDetailLoading, detailError]);

  // 후기 목록 로딩
  useEffect(() => {
    if (isDetailLoading || !id) return;

    if (isReviewLoading) {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      return;
    }

    if (reviewError) {
      setState((prev) => ({
        ...prev,
        error: '후기 정보를 불러오는 데 실패했습니다.',
        isLoading: false,
      }));
      return;
    }

    const reviewsData = reviewResponse?.result || [];
    setState((prev) => ({
      ...prev,
      reviews: reviewsData,
      isLoading: false,
    }));
  }, [id, reviewResponse, isReviewLoading, reviewError, isDetailLoading]);

  // isDirty 상태 감지
  useEffect(() => {
    if (state.initialState && state.currentState) {
      const filesChanged =
        state.pendingFiles.thumbnail !== null ||
        state.pendingFiles.materials.length > 0 ||
        state.pendingFiles.speakerProfiles.size > 0;

      const dataChanged = JSON.stringify(state.initialState) !== JSON.stringify(state.currentState);

      setState((prev) => ({ ...prev, isDirty: dataChanged || filesChanged }));
    }
  }, [state.currentState, state.initialState, state.pendingFiles]);

  // 활성화 날짜 검증
  useEffect(() => {
    if (!state.currentState) return;

    const { seminarStartDate, seminarEndDate, applicationStartDate, applicationEndDate } =
      state.currentState;

    const newErrors = {
      seminar: '',
      application: '',
    };

    const now = new Date();

    // 현재 세미나 활성화 기간 검증
    if (seminarStartDate < now) {
      newErrors.seminar = '※ 과거의 날짜는 선택할 수 없습니다.';
    } else if (seminarStartDate > seminarEndDate) {
      newErrors.seminar = '※ 시작일은 종료일보다 늦을 수 없습니다.';
    } else if (seminarStartDate.getTime() == seminarEndDate.getTime()) {
      newErrors.seminar = '※ 시작일과 종료일은 같을 수 없습니다.';
    }

    // 세미나 신청 활성화 기간 검증
    if (applicationStartDate < now) {
      newErrors.application = '※ 과거의 날짜는 선택할 수 없습니다.';
    } else if (applicationStartDate > applicationEndDate) {
      newErrors.application = '※ 시작일은 종료일보다 늦을 수 없습니다.';
    } else if (applicationStartDate.getTime() == applicationEndDate.getTime()) {
      newErrors.application = '※ 시작일과 종료일은 같을 수 없습니다.';
    } else if (applicationStartDate < seminarStartDate || applicationEndDate > seminarEndDate) {
      newErrors.application = '※ 현재 세미나 활성화 기간에서 벗어난 기간입니다.';
    }

    setState((prev) => ({
      ...prev,
      activationError: newErrors,
    }));
  }, [
    state.currentState?.seminarStartDate,
    state.currentState?.seminarEndDate,
    state.currentState?.applicationStartDate,
    state.currentState?.applicationEndDate,
  ]);

  // 폼 데이터 업데이트
  const updateSeminarData = (updatedData: Partial<SeminarDetailState>) => {
    setState((prev) => ({
      ...prev,
      currentState: prev.currentState ? { ...prev.currentState, ...updatedData } : null,
    }));
  };

  // 후기 리스트 업데이트
  const updateReviews = (updatedReviews: ReviewData[]) => {
    setState((prev) => ({
      ...prev,
      reviews: updatedReviews,
    }));
  };

  // 파일 정보 업데이트
  const updatePendingFiles = (files: Partial<SeminarState['pendingFiles']>) => {
    setState((prev) => ({
      ...prev,
      pendingFiles: { ...prev.pendingFiles, ...files },
    }));
  };

  // 유효성 검사
  const validateForm = (): FormErrors => {
    if (!state.currentState) return {};

    const newErrors: FormErrors = {};
    const dateRegex = /^\d{4}\.\d{1,2}\.\d{1,2}\.\d{1,2}:\d{2}$/;

    if (state.currentState.seminarDate && !dateRegex.test(state.currentState.seminarDate)) {
      newErrors.date = '올바른 형식(YYYY.MM.DD.HH:mm)으로 입력해주세요';
    }
    return newErrors;
  };

  // Blur 이벤트 핸들러
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const validationErrors = validateForm();
    if (e.target.name === 'seminarDate') {
      setState((prev) => ({
        ...prev,
        validationErrors: { ...prev.validationErrors, date: validationErrors.date },
      }));
    }
  };

  // 필수 필드 검증
  const validateRequiredFields = (): boolean => {
    if (!state.currentState) return false;

    const {
      seminarNum,
      seminarDate,
      place,
      topic,
      speakers,
      seminarStartDate,
      seminarEndDate,
      applicationStartDate,
      applicationEndDate,
    } = state.currentState;

    // 기본 필드 검증
    if (seminarNum === null || !seminarDate.trim() || !place.trim() || !topic.trim()) {
      return false;
    }

    // 썸네일 이미지 검증
    const hasThumbnail = !!state.currentState.thumbnailUrl || !!state.pendingFiles.thumbnail;
    if (!hasThumbnail) {
      return false;
    }

    // 연사진 정보 검증 (최소 1명 이상, 모두 필수 필드 입력)
    if (speakers.length === 0) {
      return false;
    }

    if (
      !speakers.some(
        (speaker, index) =>
          !!speaker.name.trim() &&
          !!speaker.organization.trim() &&
          !!speaker.history.trim() &&
          !!speaker.sessionTitle.trim() &&
          !!speaker.sessionContent.trim() &&
          (!!speaker.profileUrl ||
            !!state.pendingFiles.speakerProfiles.get(speaker.speakerId || index))
      )
    ) {
      return false;
    }

    if (!seminarStartDate || !seminarEndDate || !applicationStartDate || !applicationEndDate) {
      return false;
    }

    return true;
  };

  // 필수 정보 기입 여부
  const isRequiredFieldsFilled = validateRequiredFields();

  // 에러 상태 확인
  const hasErrors =
    Object.values(state.validationErrors).some((error) => !!error) ||
    !!state.activationError.seminar ||
    !!state.activationError.application ||
    !isRequiredFieldsFilled;

  // initialState 업데이트
  const setInitialState = (newState: SeminarDetailState) => {
    setState((prev) => ({
      ...prev,
      initialState: newState,
      isDirty: false,
      pendingFiles: {
        thumbnail: null,
        materials: [],
        speakerProfiles: new Map(),
      },
    }));
  };

  return {
    ...state,
    updateSeminarData,
    updateReviews,
    updatePendingFiles,
    handleBlur,
    hasErrors,
    isRequiredFieldsFilled,
    setInitialState,
  };
};
