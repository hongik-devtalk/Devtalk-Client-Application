import type { CommonResponse } from '../common';

interface showSeminar {
  seminarId: number;
  seminarNum: number;
  applicantActivate: boolean;
  liveActivate: boolean;
}

export type showSeminarResponse = CommonResponse<showSeminar[]>;

export interface showSeminarRequest {
  seminarNum: number | null;
  applicantActivate: boolean;
  liveActivate: boolean;
}
