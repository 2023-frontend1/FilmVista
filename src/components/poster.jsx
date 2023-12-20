import styled from 'styled-components';
/**
 * @component
 * @param {string} $width 이미지 가로넓이
 * @param {string} $src 이미지 경로
 * @returns {JSX.Element}
 *
 * @description
 * 영화 포스터 이미지를 보여주기위한 컴포넌트입니다.
 * 종횡비를  1/1.3 고정으로 설정해두어서 width에따라서 높이도 같은비율로 지정됩니다.
 * default width는 15rem입니다.
 */
const Poster = ({ $width = '15rem', ...rest }) => {
	return (
		<S.Div_ImageWrapper {...{ $width }}>
			<S.Img_Image {...{ ...rest }} />
		</S.Div_ImageWrapper>
	);
};
export default Poster;

const Div_ImageWrapper = styled.div`
	width: ${({ $width }) => $width};
	aspect-ratio: 1/1.3;
`;
const Img_Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const S = { Div_ImageWrapper, Img_Image };
