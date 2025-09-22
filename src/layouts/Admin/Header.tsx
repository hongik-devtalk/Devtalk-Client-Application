import devlogo from '../../assets/logos/devlogo.svg';

const Header = () => {
  return (
    <div className="flex items-center w-full h-80 px-7">
      <div className="flex items-center gap-5">
        <img src={devlogo} alt="devlogo" />
        <p className="heading-2-semibold">Devtalk Admin</p>
      </div>
    </div>
  );
};

export default Header;
