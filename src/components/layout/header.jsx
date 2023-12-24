import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { color, flexAlign } from '../../styles/themes/@index';
import SearchArea from './search_area';

/**

 * @description
 * 상단에 사이트 이름, 입력창을 담을 header 입니다.
 */
const Header = ({
	$bgColor = color.black[100],
	$color = color.gray[900],
	$borderColor = color.black[900],
}) => {
	const navigate = useNavigate();
	return (
		<S.Div_Wrapper {...{ $bgColor, $color, $borderColor }}>
			<Div_WebServiceName
				onClick={() => {
					navigate('/');
				}}
			>
				FilmVista
			</Div_WebServiceName>
			<SearchArea />
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

	${flexAlign.justifyBetween}
	${flexAlign.alignCenter}
`;

const Div_WebServiceName = styled.h3`
	cursor: pointer;
`;

const S = { Div_Wrapper };
