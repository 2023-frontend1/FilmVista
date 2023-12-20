import styled from 'styled-components';
import PosterCard from './components/poster_card';
import { flexAlign, fontSize, fontWeight } from '../styles/themes/@index';
import AlignContainer from '../components/align_container';
/**
 * /**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - fetching 된데데이터를 PosterCard에 각각뿌려주어서
 * 영화포스터와 제목,내용,별점이 보여지는 페이지컴포넌트입니다.
 *
 *
 */
const BoardPage = () => {
	return (
		<AlignContainer $compressibility="5%">
			<S.H1_CatagoryText>인기영화(catagory)</S.H1_CatagoryText>{' '}
			{/*추후에 catagory라는 변수로 만들어 어떤 페이지인지 보여줄 예정 */}
			<S.Div_CardWrapper>
				<PosterCard />
				<PosterCard />
				<PosterCard />
				<PosterCard />
				<PosterCard />
				<PosterCard />
				<PosterCard />
				<PosterCard />
				<PosterCard />
				<PosterCard />
			</S.Div_CardWrapper>
		</AlignContainer>
	);
};
export default BoardPage;
const Div_CardWrapper = styled.div`
	position: absolute;
	${flexAlign.flexStart}
	flex-wrap: wrap;
`;

const H1_CatagoryText = styled.h1`
	left: 5rem;
	top: 4rem;
	position: relative;
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
`;
const S = {
	Div_CardWrapper,
	H1_CatagoryText,
};
