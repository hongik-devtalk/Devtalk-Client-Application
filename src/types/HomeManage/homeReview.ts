import type { CommonResponse } from '../common';

export interface Review {
  reviewId: number;
  rank: number;
  score: number;
  department: string;
  grade: number;
  content: string;
  nextTopic: string;
  isPublic: boolean;
  createdAt: string;
}

export type HomeReviewListResponse = CommonResponse<{
  reviews: Review[];
}>;

export interface PutHomeReviewOrderRequest {
  orderedIds: number[];
}

export type PutHomeReviewOrderResponse = CommonResponse;

export type DeleteHomeReviewResponse = CommonResponse;
