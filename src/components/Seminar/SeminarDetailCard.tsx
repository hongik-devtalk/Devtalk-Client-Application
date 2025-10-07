import { useQuery } from '@tanstack/react-query';
import { getSeminarDetail } from '../../apis/seminarDetail';
import LoadingSpinner from '../common/LoadingSpinner';
import { formatDate } from '../../utils/formatDate';

const SeminarDeailCard = ({ id }: { id: number }) => {
  const { data, isLoading } = useQuery({
    //아직 세미나 아이디 1만 데이터 존재 -> 추후 변경 필요
    queryKey: ['seminarDetail', 1],
    queryFn: () => getSeminarDetail(1),
  });

  const { seminarNum, topic, thumbnailUrl, seminarDate, place, fileUrls } = data?.result || {};
  const formDate = formatDate(seminarDate ?? '');

  //
  const handleDownloadFiles = (fileUrls: string[]) => {
    fileUrls.forEach((fileUrl) => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = ''; // 파일 이름을 지정하지 않으면 서버에서 제공하는 이름으로 다운로드됨
      link.rel = 'noopener noreferrer';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  };

  return (
    <div className="w-[375px] h-[449px] gap-20 p-20 flex flex-col transition-all duration-500 ease-out">
      {isLoading && <LoadingSpinner />}
      <div className="w-[335px] h-[404px] gap-[31px] flex flex-col">
        <div className="h-[68px] flex flex-col gap-8 justify-between">
          <div className="subhead-2-medium text-grey-100">{seminarNum}회차</div>
          <div className="heading-2-bold text-gradient">{topic}</div>
        </div>
        <img
          src={thumbnailUrl}
          alt="seminar"
          className="h-[220px] rounded-8 border object-cover "
        />
        <div className="h-[54px] flex flex-col gap-8 body-1-medium">
          <div className="flex flex-row gap-28">
            <div className="text-grey-300">일정</div>
            <div className="text-grey-400">{formDate}</div>
          </div>
          <div className="flex flex-row gap-28">
            <div className="text-grey-300">장소</div>
            <div className="text-grey-400">{place}</div>
          </div>
        </div>
      </div>
      <div
        className="w-[102px] h-[25px] gap-10 px-8 py-4 rounded-4 bg-grey-900 cursor-pointer text-center flex items-center"
        onClick={() => handleDownloadFiles(fileUrls || [])}
      >
        <span className="text-gradient caption-semibold ">발표자료 다운로드</span>
      </div>
    </div>
  );
};

export default SeminarDeailCard;
