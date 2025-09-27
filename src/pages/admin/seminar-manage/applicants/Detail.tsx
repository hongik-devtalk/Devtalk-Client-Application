import { useParams } from 'react-router-dom';
import ApplicantsDetailList from './../../../../components/admin/applicants/ApplicantsDetailList';
import BackButton from './../../../../components/Button/BackButton';

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  // 세미나 ID별 신청자 데이터 가져오기
  const getMockApplicantsBySeminarId = (seminarId: string) => {
    const mockData: { [key: string]: any[] } = {
      '10': [
        {
          id: 1,
          seminarName: '제 10회 devtalk seminar',
          studentId: 'C11111',
          department: '컴퓨터공학과',
          grade: '3',
          name: '홍길동',
          contact: '010-1234-5678',
          attendanceType: '온라인',
          referralSource: '인스타그램',
          eventParticipation: '참여',
          sharedAccount: '@hongik_dev',
          invitedFriend: '김철수',
        },
        {
          id: 2,
          seminarName: '제 10회 devtalk seminar',
          studentId: 'C22222',
          department: '소프트웨어학부',
          grade: '2',
          name: '김영희',
          contact: '010-2345-6789',
          attendanceType: '오프라인',
          referralSource: '에브리타임',
          eventParticipation: '미참여',
          sharedAccount: '-',
          invitedFriend: '-',
        }
      ],
      '9': [
        {
          id: 1,
          seminarName: '제 9회 devtalk seminar',
          studentId: 'C22222',
          department: '소프트웨어학부',
          grade: '2',
          name: '김영희',
          contact: '010-2345-6789',
          attendanceType: '오프라인',
          referralSource: '에브리타임',
          eventParticipation: '미참여',
          sharedAccount: '-',
          invitedFriend: '-',
        },
        {
          id: 2,
          seminarName: '제 9회 devtalk seminar',
          studentId: 'C22222',
          department: '소프트웨어학부',
          grade: '2',
          name: '김영희',
          contact: '010-2345-6789',
          attendanceType: '오프라인',
          referralSource: '에브리타임',
          eventParticipation: '미참여',
          sharedAccount: '-',
          invitedFriend: '-',
        }
      ],
      '7': [
        {
          id: 1,
          seminarName: '제 7회 devtalk seminar',
          studentId: 'C22222',
          department: '소프트웨어학부',
          grade: '2',
          name: '김영희',
          contact: '010-2345-6789',
          attendanceType: '오프라인',
          referralSource: '에브리타임',
          eventParticipation: '미참여',
          sharedAccount: '-',
          invitedFriend: '-',
        }
      ]
    };

    return mockData[seminarId] || [];
  };

  const mockApplicants = getMockApplicantsBySeminarId(id!);

  const getSeminarTitle = (id: string) => `제 ${id}회 Devtalk Seminar`;

  return (
    <div className="py-11">
      <div className="flex items-center ml-[39px] mb-[23px]">
        <BackButton className="w-7 h-7 flex-shrink-0 mr-7" />
        <h1 className="text-white heading-1-bold">{getSeminarTitle(id!)}-신청자 개인정보</h1>
      </div>
      <div className="ml-[21.5px]">
        <ApplicantsDetailList applicants={mockApplicants} />
      </div>
    </div>
  );
};

export default Detail;