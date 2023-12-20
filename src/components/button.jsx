import { color, fontSize } from '../styles/themes/@index';
import styled from 'styled-components';

/**
 * @component
 * @param {string} $color 텍스트 색상
 * @param {string} $bgColor 배경 색상
 * @param {string} $radious 테두리 둥굴기정도
 * @returns {JSX.Element}
 *
 * @description
 * - 버튼클릭시 특정페이지로 이동하기위한 공용 컴포넌트 button입니다.
 *
 *
 */
const Button = ({
	children,
	$color = color.black[0],
	$bgColor = color.yellow[900],
	$radious = '1rem',
	$fontSize = fontSize.medium,
	...rest
}) => {
	return (
		<S.But_Button
			{...{ children, $color, $bgColor, $radious, $fontSize, ...rest }}
		>
			{children}
		</S.But_Button>
	);
};
export default Button;

const But_Button = styled.button`
	padding: 1rem 2rem;
	font-size: ${({ $fontSize }) => $fontSize};
	color: ${({ $color }) => $color};
	background-color: ${({ $bgColor }) => $bgColor};
	border-radius: ${({ $radious }) => $radious};
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

const S = {
	But_Button,
};
