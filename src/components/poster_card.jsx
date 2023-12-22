import styled from 'styled-components';
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../styles/themes/@index';
import Poster from './poster';
/**
 * /**
 * @component
 * @param {string} posterPath 영화 포스터 url
 * @param {string} title 영화제목
 * @param {string} overview 영화내용 설명
 * @param {string} popularity 인기지수
 * @param {string} voteAverage 평점
 * @param {string} voteCount 투표수
 * @param {string} releaseDate 개봉일
 * @returns {JSX.Element}
 *
 * @description
 * - fetching 된데데이터를 프롭스로 전달 받아서 하나의 posterCard가되는 컴포넌트
 */

const PosterCard = ({
	posterPath,
	title,
	overview = '🚨 미리보기가 없습니다.',
	popularity,
	voteAverage,
	voteCount,
	releaseDate,
	...rest
}) => {
	return (
		<S.Div_MainWrapper {...rest}>
			<Poster src={posterPath} $width="16rem" />
			<S.Div_InfoWrapper>
				<S.H1_Title>{title}</S.H1_Title>
				<S.P_Content>{overview}</S.P_Content>
				<S.P_AdditionalInfo>🔥 인기지수: {popularity}</S.P_AdditionalInfo>
				<S.P_AdditionalInfo>
					👍 평점 / 투표수 : {voteAverage} / {voteCount}
				</S.P_AdditionalInfo>
				<S.P_AdditionalInfo>📅 개봉일 : {releaseDate}</S.P_AdditionalInfo>
			</S.Div_InfoWrapper>
		</S.Div_MainWrapper>
	);
};
export default PosterCard;

const Div_MainWrapper = styled.div`
	${flexAlign.alignCenter}
	${flexAlign.justifyBetween};
	width: 35rem;
	height: 22rem;
	color: ${color.gray[900]};
	cursor: pointer;
`;

const Div_InfoWrapper = styled.div`
	width: 18rem;
	height: 100%;
	${flexAlign.directionColumn}
	justify-content: space-between;
`;

const H1_Title = styled.h3`
	height: 25%;
	word-break: keep-all;

	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

const P_Content = styled.p`
	height: 39%;

	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`;
const P_AdditionalInfo = styled.p`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.bold};
`;

const S = {
	Div_MainWrapper,
	Div_InfoWrapper,
	H1_Title,
	P_Content,
	P_AdditionalInfo,
};
