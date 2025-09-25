type ButtonProps = {
  variant?: 'home' | 'default' | 'sub' | 'disabled';
};

export const Button = ({ variant = 'default' }: ButtonProps) => {
  const baseStyle = 'w-[335px] h-[48px] rounded-80 subhead-1-semibold';
  const variantStyles = {
    home: 'button-gradient text-white',
    default: 'graphic-gradient-light text-black',
    sub: 'bg-grey-700 text-white',
    disabled: 'bg-grey-700 text-grey-500',
  };
  return (
    <button className={`${baseStyle} ${variantStyles[variant]}`}>10회차 세미나 신청하기</button>
  );
};
