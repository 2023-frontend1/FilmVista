import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { color, flexAlign } from '../../styles/themes/@index';
import { Spacer } from '../@index';
import { Header, SideBar } from './@index';

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
	/** 좌측 사이바 영역의 너비 */
	const sideBarWidth = '12rem';

	return (
		<>
			<Header {...$bgColor} {...$color} {...$borderColor} />
			<SideBar
				{...$bgColor}
				{...$color}
				{...$borderColor}
				$width={sideBarWidth}
			/>

			<Div_PageContentsContainer>
				<Spacer $width={sideBarWidth} />
				<Outlet />
			</Div_PageContentsContainer>
		</>
	);
};
export default Layout;

// Header, SideBar 컴포넌트 외 어떤 페이지를 구성하는 컴포넌트를 감쌉니다.
const Div_PageContentsContainer = styled.div`
	${flexAlign.flexStart}
`;
