import type { CommonResponse } from '../common';

export interface Review {
  reviewId: number;
  order: number;
  rating: number;
  department: string;
  grade: number;
  content: string;
  nextTopic: string;
  visible: boolean;
  createdAt: string;
}

export type HomeReviewListResponse = CommonResponse<Review[]>;

export interface PutHomeReviewOrderRequest {
  orderedIds: number[];
}

export type PutHomeReviewOrderResponse = CommonResponse;

export type DeleteHomeReviewResponse = CommonResponse;
