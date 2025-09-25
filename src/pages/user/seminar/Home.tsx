import Header from '../../../components/common/Header';
import SeminaListCard from '../../../components/Semina/SeminaListCard';

function SeminarHome() {
  return (
    <div>
      <div className="flex flex-col justify-center gap-16 px-20">
        <Header />
        <div className="heading-1-bold text-white">세미나</div>
        <div className="flex flex-col gap-28 items-center ">
          <div className="border-t border-grey-700">
            <SeminaListCard />
          </div>
          <div className="border-t border-grey-700">
            <SeminaListCard />
          </div>
          <div className="border-t border-grey-700">
            <SeminaListCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeminarHome;
