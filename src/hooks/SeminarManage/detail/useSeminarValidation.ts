import { useMemo } from 'react';
import type {
  SeminarDetailState,
  FormErrors,
  SeminarState,
} from '../../../types/SeminarManage/seminar.state';

interface ValidationResult {
  validationErrors: FormErrors;
  activationError: { seminar: string; application: string };
  isRequiredFieldsFilled: boolean;
  hasErrors: boolean;
}

export const useSeminarValidation = (
  currentState: SeminarDetailState | null,
  pendingFiles: SeminarState['pendingFiles']
): ValidationResult => {
  // 날짜 형식 검증
  const validateDateFormat = (date: string): string | undefined => {
    const dateRegex = /^\d{4}\.\d{1,2}\.\d{1,2}\.\d{1,2}:\d{2}$/;
    if (date && !dateRegex.test(date)) {
      return '올바른 형식(YYYY.MM.DD.HH:mm)으로 입력해주세요';
    }
    return undefined;
  };

  // 활성화 날짜 검증
  const validateActivationDates = useMemo(() => {
    if (!currentState) {
      return { seminar: '', application: '' };
    }

    const { seminarStartDate, seminarEndDate, applicationStartDate, applicationEndDate } =
      currentState;
    const newErrors = { seminar: '', application: '' };
    const now = new Date();

    // 세미나 활성화 기간 검증
    if (seminarStartDate < now) {
      newErrors.seminar = '※ 과거의 날짜는 선택할 수 없습니다.';
    } else if (seminarStartDate > seminarEndDate) {
      newErrors.seminar = '※ 시작일은 종료일보다 늦을 수 없습니다.';
    } else if (seminarStartDate.getTime() === seminarEndDate.getTime()) {
      newErrors.seminar = '※ 시작일과 종료일은 같을 수 없습니다.';
    }

    // 신청 기간 검증
    if (applicationStartDate < now) {
      newErrors.application = '※ 과거의 날짜는 선택할 수 없습니다.';
    } else if (applicationStartDate > applicationEndDate) {
      newErrors.application = '※ 시작일은 종료일보다 늦을 수 없습니다.';
    } else if (applicationStartDate.getTime() === applicationEndDate.getTime()) {
      newErrors.application = '※ 시작일과 종료일은 같을 수 없습니다.';
    } else if (applicationStartDate < seminarStartDate || applicationEndDate > seminarEndDate) {
      newErrors.application = '※ 현재 세미나 활성화 기간에서 벗어난 기간입니다.';
    }

    return newErrors;
  }, [currentState]);

  // 필수 필드 검증
  const isRequiredFieldsFilled = useMemo(() => {
    if (!currentState) return false;

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
    } = currentState;

    // 기본 필드
    if (seminarNum === null || !seminarDate.trim() || !place.trim() || !topic.trim()) {
      return false;
    }

    // 썸네일
    const hasThumbnail = !!currentState.thumbnailUrl || !!pendingFiles.thumbnail;
    if (!hasThumbnail) {
      return false;
    }

    // 연사 (최소 1명)
    if (speakers.length === 0) {
      return false;
    }

    const hasValidSpeaker = speakers.some((speaker, index) => {
      const hasProfile =
        !!speaker.profileUrl || !!pendingFiles.speakerProfiles.get(speaker.speakerId || index);
      return (
        !!speaker.name.trim() &&
        !!speaker.organization.trim() &&
        !!speaker.history.trim() &&
        !!speaker.sessionTitle.trim() &&
        !!speaker.sessionContent.trim() &&
        hasProfile
      );
    });

    if (!hasValidSpeaker) {
      return false;
    }

    // 날짜
    if (!seminarStartDate || !seminarEndDate || !applicationStartDate || !applicationEndDate) {
      return false;
    }

    return true;
  }, [currentState, pendingFiles]);

  const validationErrors: FormErrors = {
    date: currentState?.seminarDate ? validateDateFormat(currentState.seminarDate) : undefined,
  };

  const hasErrors =
    Object.values(validationErrors).some((error) => !!error) ||
    !!validateActivationDates.seminar ||
    !!validateActivationDates.application ||
    !isRequiredFieldsFilled;

  return {
    validationErrors,
    activationError: validateActivationDates,
    isRequiredFieldsFilled,
    hasErrors,
  };
};
