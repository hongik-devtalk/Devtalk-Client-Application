import type { CommonResponse } from '../common';

export interface SeminarNumsResult {
  seminarNums: number[];
}

export type SeminarNumsResponse = CommonResponse<SeminarNumsResult>;
