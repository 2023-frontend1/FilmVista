import styled from 'styled-components';
import { flexAlign, fontSize, fontWeight } from '../styles/themes/@index';
import Poster from './poster';
/**
 * /**
 * @component
 * @param {string} imgUrl 영화 포스터 url
 * @param {string} title 영화제목
 * @param {string} overview 영화내용 설명
 * @param {string} rate 영화별점
 * @param {string} releaseDate 개봉일
 * @returns {JSX.Element}
 *
 * @description
 * - fetching 된데데이터를 프롭스로 전달 받아서 하나의 posterCard가되는 컴포넌트
 */

const PosterCard = ({ imgUrl, title, overview, rate, releaseDate }) => {
	return (
		<S.Div_MainWrapper>
			<Poster src="/film_icon.svg" />
			<S.Div_InfoWrapper>
				<S.H1_Title>{title}</S.H1_Title>
				<S.P_Content>{overview}</S.P_Content>
				<S.P_Rate>{rate}</S.P_Rate>
			</S.Div_InfoWrapper>
		</S.Div_MainWrapper>
	);
};
export default PosterCard;

const Div_MainWrapper = styled.div`
	${flexAlign.alignCenter}
	padding-top: 10rem;
	padding-left: 10rem;
`;
const Div_InfoWrapper = styled.div`
	position: relative;
	display: block;
	margin-left: 1rem;
	width: 15rem;
	aspect-ratio: 1/1.13;
`;

const H1_Title = styled.h1``;

const P_Content = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`;
const P_Rate = styled.p`
	position: absolute;
	right: 0;
	bottom: 0;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.bold};
`;

const S = {
	Div_MainWrapper,
	Div_InfoWrapper,
	H1_Title,
	P_Content,
	P_Rate,
};
