import { useParams } from 'react-router-dom';

function SeminarDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>세미나 상세 정보</h1>
      <p>세미나 ID: {id}</p>
    </div>
  );
}

export default SeminarDetail;