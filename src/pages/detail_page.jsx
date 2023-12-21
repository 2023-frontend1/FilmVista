import styled from 'styled-components';
import { AlignContainer, Poster } from '../components/@index';
import { flexAlign, fontSize, fontWeight } from '../styles/themes/@index';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import movies from '../constants/react_query_key';
import moviesFetchFn from '../libs/axios/movie';

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
		<S.Div_BackgroundImg
			Img={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
		>
			<AlignContainer $compressibility="15%">
				<S.Div_TitleWrapper>
					<S.H1_Title>{data.title}</S.H1_Title>
					<S.P_OriginalTitle>{`원제목(${data.original_title})`}</S.P_OriginalTitle>
				</S.Div_TitleWrapper>
				<S.Div_OverViewWrapper>
					<Poster
						$width="40rem"
						src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
					/>
					<S.Div_OverView>
						<S.P_OverViewTitle>OverView</S.P_OverViewTitle>
						{data.overview ? (
							data.overview
						) : (
							<p>아쉽지만.. 미리보기가 없습니다.</p>
						)}
					</S.Div_OverView>
					<S.Div_VoteWrapper>
						<S.P_VoteRate>평점:{data.vote_average}점</S.P_VoteRate>
						<S.P_VoteCount>{`총(${data.vote_count}명)`}</S.P_VoteCount>
					</S.Div_VoteWrapper>
				</S.Div_OverViewWrapper>
				<S.P_Release>개봉일자 :{data.release_date}</S.P_Release>
			</AlignContainer>
		</S.Div_BackgroundImg>
	);
};

export default DetailPage;

const Div_TitleWrapper = styled.div`
	${flexAlign.alignCenter}
	align-items: flex-end;
`;

const Div_BackgroundImg = styled.div`
	height: 60vh;
	background-image: url(${({ Img }) => Img});
	background-size: cover;
	image-rendering: auto;
	background-position: center;
	backdrop-filter: blur(10px);
`;

const H1_Title = styled.h1`
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
	padding-right: 1rem;
`;

const P_OriginalTitle = styled.p`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
`;

const P_Release = styled.p`
	font-size: ${fontSize.small};
	font-weight: ${fontWeight.extarBold};
`;

const Div_OverViewWrapper = styled.div`
	display: flex;
	position: relative;
`;

const P_OverViewTitle = styled.p`
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
`;

const Div_OverView = styled.div`
	line-height: 3.5rem;
	padding-top: 3rem;
	padding-left: 4rem;
	width: 80%;
`;

const Div_VoteWrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	${flexAlign.alignCenter}
`;

const P_VoteRate = styled.p`
	margin-right: 1rem;
`;

const P_VoteCount = styled.p`
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
`;

const S = {
	Div_TitleWrapper,
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
