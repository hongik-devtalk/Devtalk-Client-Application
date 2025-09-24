import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDate';

interface Seminar {
  id: number;
  title: string;
  date: string;
  location: string;
  topic: string;
}

interface SeminarCardProps {
  seminar: Seminar;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ seminar }) => {
  return (
    <Link to={`/admin/seminars/${seminar.id}`}>
      <div className="bg-grey-700 rounded-lg p-5 cursor-pointer transition-colors border border-transparent hover:border-green-300 hover:bg-grey-600 duration-300">
        {/* 세미나 정보 */}
        <h2 className="heading-2-bold mb-3 text-center">{seminar.title}</h2>

        <div className="flex space-x-5">
          {/* 이미지 */}
          <div className="w-[250px] h-[200px] bg-grey-100 rounded-md"></div>

          <div className="flex flex-col mt-[16px] flex-1 min-w-0">
            <div className="mb-[16px]">
              <p className="body-2-semibold mb-[8px] text-grey-300">일정</p>
              <div className="caption-semibold">{formatDate(seminar.date)}</div>
            </div>
            <div className="mb-[16px]">
              <p className="body-2-semibold mb-[8px] text-grey-300">장소</p>
              <div className="caption-semibold ">{seminar.location}</div>
            </div>
            <div className="mb-[16px]">
              <p className="body-2-semibold mb-[8px] text-grey-300">주제</p>
              <div className="caption-semibold w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {seminar.topic}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SeminarCard;
