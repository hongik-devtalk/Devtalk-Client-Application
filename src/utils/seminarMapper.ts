import type { SeminarDetailData, SpeakerData } from '../types/SeminarManage/seminarDetail.api';
import type { SeminarDetailState, SpeakerState } from '../types/SeminarManage/seminar.state';
import { formatIsoToInput } from './formatDate';

export const mapApiDataToState = (apiData: SeminarDetailData): SeminarDetailState => {
  return {
    seminarId: apiData.seminarId,
    seminarNum: apiData.seminarNum,
    topic: apiData.topic,
    seminarDate: formatIsoToInput(apiData.seminarDate),
    place: apiData.place,
    liveLink: apiData.liveLink,
    thumbnailUrl: apiData.thumbnail?.fileUrl || null,
    thumbnailFileName: apiData.thumbnail?.fileName || null,
    materials: apiData.materials || [],
    speakers: apiData.speakers.map(
      (apiSpeaker: SpeakerData): SpeakerState => ({
        speakerId: apiSpeaker.speakerId,
        name: apiSpeaker.name,
        organization: apiSpeaker.organization,
        history: apiSpeaker.history,
        sessionTitle: apiSpeaker.sessionTitle,
        sessionContent: apiSpeaker.sessionContent,
        profileUrl: apiSpeaker.profile?.fileUrl || null,
        profileFileName: apiSpeaker.profile?.fileName || null,
      })
    ),
    seminarStartDate: new Date(apiData.activeStartDate),
    seminarEndDate: new Date(apiData.activeEndDate),
    applicationStartDate: new Date(apiData.applyStartDate),
    applicationEndDate: new Date(apiData.applyEndDate),
  };
};
