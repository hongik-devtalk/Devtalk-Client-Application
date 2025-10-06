import type { CommonResponse } from '../common';

export interface FileData {
  fileName: string;
  fileExtension: string;
  fileSize: number;
  fileUrl: string;
}

export interface SpeakerData {
  speakerId?: number;
  name: string;
  organization: string;
  history: string;
  sessionTitle: string;
  sessionContent: string;
  profile: FileData;
}

export interface SeminarDetailData {
  seminarId: number;
  seminarNum: number | null;
  topic: string;
  seminarDate: string;
  place: string;
  activeStartDate: string;
  activeEndDate: string;
  applyStartDate: string;
  applyEndDate: string;
  liveLink: string;
  thumbnail: FileData;
  materials: FileData[];
  speakers: SpeakerData[];
}

export type SeminarDetailResponse = CommonResponse<SeminarDetailData>;

