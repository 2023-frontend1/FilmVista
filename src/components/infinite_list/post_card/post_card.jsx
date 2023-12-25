import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../../styles/themes/@index';
import Poster from '../../poster';
/**
 * @component
 * @param {string} title 영화제목
 * @param {string} poster_path 영화 포스터 url
 * @param {string} overview 영화내용 설명
 * @param {string} popularity 인기지수
 * @param {string} vote_average 평점
 * @param {string} vote_count 투표수
 * @param {string} release_date 개봉일
 * @returns {JSX.Element}
 *
 * @description
 * - fetching 된 데이터를 props로 전달받아서 하나의 posterCard가 되는 컴포넌트
 */

const PosterCard = ({
	id,
	poster_path,
	title,
	overview = '-',
	popularity,
	vote_average,
	vote_count,
	release_date,
}) => {
	const navigate = useNavigate();
	return (
		<S.Div_MainWrapper
			onClick={() => {
				navigate(`/detail/${id}`);
			}}
		>
			<Poster
				src={import.meta.env.VITE_APP_MOVIES_API_IMG_URL + poster_path}
				$width="16rem"
			/>
			<S.Div_InfoWrapper>
				<S.H1_Title>{title}</S.H1_Title>
				<S.P_Content>{overview}</S.P_Content>
				<S.P_AdditionalInfo>🔥 인기지수: {popularity}</S.P_AdditionalInfo>
				<S.P_AdditionalInfo>
					👍 평점 / 투표수 : {vote_average} / {vote_count}
				</S.P_AdditionalInfo>
				<S.P_AdditionalInfo>📅 개봉일 : {release_date}</S.P_AdditionalInfo>
			</S.Div_InfoWrapper>
		</S.Div_MainWrapper>
	);
};
export default PosterCard;

const Div_MainWrapper = styled.div`
	${flexAlign.alignCenter}
	${flexAlign.justifyBetween};
	width: 36rem;
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
	word-break: keep-all;
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
`;

const P_Content = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
	display: -webkit-box;
	-webkit-line-clamp: 3;
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
