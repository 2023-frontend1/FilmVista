import styled from 'styled-components';
import { color, flexAlign } from '../styles/themes/@index';

/**
 * @description
 * 좌측에 navigation function 이 부여된 버튼리스트를 담을 사이드바 입니다.
 */
const SideBar = ({
	$bgColor = color.black[100],
	$color = color.gray[900],
	$borderColor = color.black[900],
}) => {
	return (
		<Div_Wrapper {...{ $bgColor, $color, $borderColor }}>
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</Div_Wrapper>
	);
};

export default SideBar;

const Div_Wrapper = styled.div`
	position: fixed;
	left: 0%;
	top: 0%;
	z-index: 10000;

	width: 100px;
	height: 100vh;

	color: ${({ $color }) => $color};
	background-color: ${({ $bgColor }) => $bgColor};
	border-right: 0.5px solid ${({ $borderColor }) => $borderColor};

	${flexAlign.directionColumn}
	${flexAlign.alignCenter}

  padding: 85px  0;

	gap: 1rem;
`;
