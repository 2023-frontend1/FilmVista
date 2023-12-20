import styled from 'styled-components';
import { color, flexAlign } from '../styles/themes/@index';

/**

 * @description
 * 상단에 사이트 이름, 입력창을 담을 header 입니다.
 */
const Header = ({
	$bgColor = color.black[100],
	$color = color.gray[900],
	$borderColor = color.black[900],
}) => {
	return (
		<S.Div_Wrapper {...{ $bgColor, $color, $borderColor }}>
			<h3>FilmVista</h3>
		</S.Div_Wrapper>
	);
};
export default Header;

const Div_Wrapper = styled.div`
	position: sticky;
	left: 0%;
	top: 0%;
	z-index: 100000;

	height: 7rem;
	max-height: 80px;
	padding-left: 20px;

	background-color: ${({ $bgColor }) => $bgColor};
	color: ${({ $color }) => $color};
	border-bottom: 0.5px solid ${({ $borderColor }) => $borderColor};

	${flexAlign.alignCenter}
`;

const S = { Div_Wrapper };
