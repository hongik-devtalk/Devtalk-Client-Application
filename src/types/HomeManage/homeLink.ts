import type { CommonResponse } from '../common';

export interface HomeLinkResponse {
  result: {
    url: string | null;
  };
}

export interface PostHomeLinkRequest {
  url: string;
}

export interface PostHomeLinkResponse extends CommonResponse {}

export interface DeleteHomeLinkResponse extends CommonResponse {}
