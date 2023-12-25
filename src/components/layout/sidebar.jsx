import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sidebarCategory from '../../constants/texts/sidebar_category';
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index';

/**
 * @component
 * @param {string} $bgColor 사이드바 배경색상
 * @param {string} $color 사이드바 내부요소 색상
 * @param {string} $borderColor 사이드바 경계선 색상
 * @param {string} $width 사이드바 너비
 *
 * @description
 * 좌측에 navigation function 이 부여된 버튼리스트를 담을 사이드바 입니다.
 */
const SideBar = ({
	$bgColor = color.black[100],
	$color = color.gray[900],
	$borderColor = color.black[900],
	$width = '12rem',
}) => {
	const navigate = useNavigate();

	return (
		<S.Ul_CategoryList {...{ $bgColor, $color, $borderColor, $width }}>
			{Object.entries(sidebarCategory).map((cate, idx) => {
				return (
					<S.Li_Category
						key={idx}
						onClick={() => {
							navigate(`/${cate[0]}`);
						}}
					>
						{cate[1]}
					</S.Li_Category>
				);
			})}
		</S.Ul_CategoryList>
	);
};

export default SideBar;

const Ul_CategoryList = styled.ul`
	position: fixed;
	left: 0%;
	top: 0%;
	z-index: 10000;

	width: ${({ $width }) => $width};
	height: 100vh;

	color: ${({ $color }) => $color};
	background-color: ${({ $bgColor }) => $bgColor};
	border-right: 0.5px solid ${({ $borderColor }) => $borderColor};

	${flexAlign.directionColumn}
	${flexAlign.alignCenter}

  padding: 85px  0;

	gap: 3rem;
`;

const Li_Category = styled.li`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.light};
	width: 80%;
	padding: 1rem;
	border-radius: 1rem;
	cursor: pointer;
	&:hover {
		background-color: ${color.black[300]};
	}
`;

const S = {
	Ul_CategoryList,
	Li_Category,
};
