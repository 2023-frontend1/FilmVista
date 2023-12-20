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
const Button = ({ children, $color, $bgColor, $radious, ...rest }) => {
	return (
		<S.But_Button {...{ children, $color, $bgColor, $radious, ...rest }}>
			{children}
		</S.But_Button>
	);
};
export default Button;

const But_Button = styled.button`
	color: ${({ $color }) => $color};
	background-color: ${({ $bgColor }) => $bgColor};
	border-radius: ${({ $$radious }) => $$radious};
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

const S = {
	But_Button,
};
