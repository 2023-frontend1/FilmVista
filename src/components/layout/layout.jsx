import { Outlet } from 'react-router-dom';
import { color } from '../../styles/themes/@index';
import Header from './header';
import SideBar from './sidebar';

/**
 * @component
 * @param {string} $bgColor 배경 색상
 * @param {string} $color 내부 컨텐트 색상
 * @param {string} $borderColor 테두리 색상
 * @returns {JSX.Element}
 */
const Layout = (
	$bgColor = color.black[100],
	$color = color.gray[900],
	$borderColor = color.black[900]
) => {
	return (
		<>
			<Header {...$bgColor} {...$color} {...$borderColor} />
			<SideBar {...$bgColor} {...$color} {...$borderColor} />
			<Outlet />
		</>
	);
};

export default Layout;
