import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className={`text-white hover:opacity-70 transition-opacity ${className} cursor-pointer`}
      aria-label="뒤로가기"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path d="M23.8333 14.5H5.16663M5.16663 14.5L12.1666 21.5M5.16663 14.5L12.1666 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default BackButton;