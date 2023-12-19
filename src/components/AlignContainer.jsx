import styled from 'styled-components';

/**
 * @component
 * @param {string} $bg_color 배경 색상
 * @param {string} $compressibility 압축률 (* 횡 기준)
 * @returns {JSX.Element}
 *
 * @description
 * - 내부 요소를 좌우 여백을 일괄로 주어, 가운데로 모아주는 Container 입니다.
 * - height
 *
 */
const AlignContainer = ({
	$bg_color,
	$compressibility = '25%',
	children,
	...rest
}) => {
	return (
		<S.Div_Container $bg_color $compressibility {...rest}>
			{children}
		</S.Div_Container>
	);
};

export default AlignContainer;

const c = styled.div`
	width: 100%;
	height: fit-content;
	padding: 0 ${({ $compressibility }) => $compressibility};
	background-color: ${({ $bg_color }) => $bg_color};
`;

const S = {
	Div_Container,
};
