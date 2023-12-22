import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { AlignContainer, Poster } from '../components/@index';
import movies from '../constants/query_keys/movies';
import moviesFetchFn from '../libs/axios/movie';
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../styles/themes/@index';

const DetailPage = () => {
	const { movieId } = useParams();
	const { data, isLoading } = useQuery({
		queryKey: [movies.detail, movieId], // Correcting the queryKey
		queryFn: () => moviesFetchFn.detail(movieId),
	});

	if (isLoading) {
		return <div>로딩중 띠로리~</div>;
	}

	return (
		<S.Div_MainWrapper>
			<S.Div_BackgroundImg
				Img={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
			>
				<AlignContainer $compressibility="15%" style={{ zIndex: '0' }}>
					<S.Div_PosterContainer>
						<Poster
							$width="33rem"
							src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
							style={{ marginTop: '2rem', marginLeft: '15rem' }}
						/>
					</S.Div_PosterContainer>
				</AlignContainer>
			</S.Div_BackgroundImg>
			<AlignContainer $compressibility="18%" style={{ zIndex: '0' }}>
				<S.Div_TitleContainer>
					<S.H1_Title>{data.title}</S.H1_Title>
				</S.Div_TitleContainer>

				<S.Div_OverViewWrapper>
					<S.Div_OverView>
						<S.P_OverViewTitle>개요</S.P_OverViewTitle>
						{data.overview ? (
							data.overview
						) : (
							<p>아쉽지만.. 미리보기가 없습니다. 영화관에서 확인하세요^^</p>
						)}
					</S.Div_OverView>
				</S.Div_OverViewWrapper>
				<S.Div_VoteWrapper>
					<S.P_VoteRate>🔥 인기지수:{data.vote_average}점</S.P_VoteRate>
					<S.P_VoteCount>{`총(${data.vote_count}명)`}</S.P_VoteCount>
				</S.Div_VoteWrapper>
				<S.P_Release>📅 개봉일 :{data.release_date}</S.P_Release>
			</AlignContainer>
		</S.Div_MainWrapper>
	);
};

export default DetailPage;

const Div_MainWrapper = styled.div`
	width: 100%;
	min-height: 92.5vh;
	height: 100%;
	background-color: ${color.black[100]};
	position: relative;
`;
const Div_PosterContainer = styled.div`
	position: absolute;
	left: 15rem;
`;
const Div_TitleContainer = styled.div`
	${flexAlign.alignCenter}
`;

const Div_BackgroundImg = styled.div`
	z-index: 1000;
	height: 50vh;
	background-image: url(${({ Img }) => Img});
	background-size: 80%;
	background-size: cover;
	image-rendering: auto;
	background-position: center;
`;

const H1_Title = styled.h1`
	color: ${color.gray[900]};
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
	padding-right: 1rem;
`;

const P_OriginalTitle = styled.p`
	color: ${color.gray[900]};
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
`;

const P_Release = styled.p`
	color: ${color.gray[900]};
	font-size: ${fontSize.small};
	font-weight: ${fontWeight.extarBold};
	padding-bottom: 4rem;
`;

const Div_OverViewWrapper = styled.div`
	padding-bottom: 3rem;
`;

const P_OverViewTitle = styled.p`
	color: ${color.gray[900]};
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
	padding-bottom: 2rem;
`;

const Div_OverView = styled.div`
	color: ${color.gray[900]};
	line-height: 3.5rem;
	padding-top: 3rem;
	padding-left: 4rem;
	width: 80%;
`;

const Div_VoteWrapper = styled.div`
	color: ${color.gray[900]};
	${flexAlign.alignCenter}
`;

const P_VoteRate = styled.p`
	color: ${color.gray[900]};
	margin-right: 1rem;
`;

const P_VoteCount = styled.p`
	color: ${color.gray[900]};
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
`;

const S = {
	Div_MainWrapper,
	Div_PosterContainer,
	Div_TitleContainer,
	Div_BackgroundImg,
	H1_Title,
	P_OriginalTitle,
	Div_OverViewWrapper,
	P_OverViewTitle,
	Div_OverView,
	P_Release,
	Div_VoteWrapper,
	P_VoteRate,
	P_VoteCount,
};
