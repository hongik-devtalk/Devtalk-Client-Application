import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ChevronUp from '../../assets/icons/common/ChevronUp.svg';
import ChevronDown from '../../assets/icons/common/ChevronDown.svg';
import devlogo from '../../assets/logos/devlogo.svg';

const menuData = [
  {
    title: '홈 화면 관리',
    children: [
      { name: '홍보 사진 관리', to: '/admin/home/promo' },
      { name: '링크 관리', to: '/admin/home/links' },
      { name: '후기 카드 갤러리', to: '/admin/home/reviews' },
    ],
  },
  {
    title: '세미나 관리',
    children: [
      { name: '세미나 카드 조회', to: '/admin/seminars' },
      { name: '세미나 추가하기', to: '/admin/seminars/add' },
      { name: '세미나 신청자 관리', to: '/admin/seminars/applicants' },
    ],
  },
  {
    title: '세미나 Live 관리',
    children: [
      { name: 'Live 링크 관리', to: '/admin/seminar-live/links' },
      { name: '출석 관리', to: '/admin/seminar-live/attendance' },
      { name: '질문 및 후기', to: '/admin/seminar-live/questions' },
    ],
  },
  {
    title: '관리자 권한 관리',
    children: [{ name: '관리자 아이디 관리', to: '/admin/admin-accounts' }],
  },
];

export const Sidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>(() =>
    menuData.map((section) => section.title)
  );

  const handleSectionClick = (title: string) => {
    if (openSections?.includes(title)) {
      setOpenSections(openSections.filter((sectionTitle) => sectionTitle !== title));
    } else {
      setOpenSections([...openSections, title]);
    }
  };

  // 사이드바 메뉴 스타일
  const activeLinkStyle = 'bg-grey-700 text-green-300';
  const inactiveLinkStyle = 'text-grey-300';

  return (
    <aside className="w-[290px] text-white bg-grey-900 flex flex-col">
      {/* 로고 */}
      <Link className="flex items-center justify-center gap-3 h-[80px]" to="/admin">
        <img src={devlogo} alt="devlogo" className="w-80 h-9" />
        <span className="heading-2-bold">Admin</span>
      </Link>

      {/* 사이드바 메뉴들 */}
      <div className="flex-1 h-[44px] px-4 overflow-y-auto">
        <nav className="flex flex-col space-y-2">
          {menuData.map((section) => (
            <div key={section.title}>
              <div
                className="flex justify-between gap-6 p-3 pl-[40px] pr-[20px] cursor-pointer rounded-md hover:bg-grey-700"
                onClick={() => handleSectionClick(section.title)}
              >
                <h3 className="heading-3-semibold">{section.title}</h3>
                {openSections.includes(section.title) ? (
                  <img src={ChevronDown} />
                ) : (
                  <img src={ChevronUp} />
                )}
              </div>

              {openSections.includes(section.title) && (
                <ul className="py-1 pl-[28px]">
                  {section.children.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.to}
                        end // 정확히 일치하는 경로에서만 스타일 적용
                        className={({ isActive }) =>
                          `flex items-center h-[40px] p-3 rounded-md cursor-pointer subhead-1-medium relative transition-colors ${
                            isActive ? activeLinkStyle : inactiveLinkStyle
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* 로그아웃 버튼 */}
      <div className="h-[52px] pl-14">
        <Link className="w-full" to="/">
          로그아웃
        </Link>
      </div>
    </aside>
  );
};
