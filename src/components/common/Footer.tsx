import link from '../../assets/icons/link.svg';
import mail from '../../assets/icons/mail.svg';
import messagecircle from '../../assets/icons/messagecircle.svg';
import devlogo from '../../assets/logos/devlogo.svg';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-[37.5rem] h-[12.2rem] bg-grey-800">
      <div className="flex flex-row justify-between w-[32.7rem] h-[6.2rem] ">
        {/* 왼쪽 정보 영역 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-[0.8rem]">
            <img src={link} alt="link" className="w-[1.8rem] h-[1.8rem]" />
            <span className="font-caption-medium text-grey-200">개인정보 처리 방침 링크</span>
          </div>
          <div className="flex items-center gap-[0.8rem]">
            <img src={mail} alt="mail" className="w-[1.8rem] h-[1.8rem]" />
            <span className="font-caption-medium text-grey-200">devtalk11@gmail.com</span>
          </div>
          <div className="flex items-center gap-[0.8rem]">
            <img src={messagecircle} alt="messagecircle" className="w-[1.8rem] h-[1.8rem]" />
            <span className="font-caption-medium text-grey-200">문의하기</span>
          </div>
        </div>

        {/* 오른쪽 로고 */}
        <div className="flex items-start">
          <img src={devlogo} alt="devlogo" className="w-[10rem] h-[4.10rem]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
