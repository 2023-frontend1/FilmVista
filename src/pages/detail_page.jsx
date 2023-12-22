import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { AlignContainer, Poster } from '../components/@index';
import movies from '../constants/query_keys/movies';
import moviesFetchFn from '../libs/axios/movie';
import { color, flexAlign } from '../styles/themes/@index';

const DetailPage = () => {
	const { movieId } = useParams();
	const { data, isLoading } = useQuery({
		queryKey: [movies.detail, movieId], // Correcting the queryKey
		queryFn: () => moviesFetchFn.detail(movieId),
	});

	if (isLoading) {
		return <div> 불러온 데이터가 없습니다.</div>;
	}

	return (
		<S.Div_MainWrapper>
			<S.Img_BackgroundImg
				src={import.meta.env.VITE_APP_MOVIES_API_IMG_URL + data.backdrop_path}
				width="100%"
				height="100%"
			/>

			<AlignContainer
				$compressibility="15%"
				$bgColor="none"
				style={{ position: 'absolute', zIndex: 1, height: '100%' }}
			>
				<S.Div_ContentContainer>
					<Poster
						$width="40rem"
						src={import.meta.env.VITE_APP_MOVIES_API_IMG_URL + data.poster_path}
					/>
					<S.Div_TextArea>
						<H1_Title>{data.title}</H1_Title>
						<br />
						<h2>개요</h2>
						<S.P_Overview>
							{data.overview ? (
								data.overview
							) : (
								<p>아쉽지만.. 미리보기가 없습니다. 영화관에서 확인하세요^^</p>
							)}
						</S.P_Overview>
						<br />
						<h3>부가정보</h3>
						<S.Sec_AdditionalInfo>
							<p>
								🔥 인기지수:{data.vote_average}점 {`총(${data.vote_count}명)`}
							</p>
							<p>📅 개봉일 :{data.release_date}</p>
						</S.Sec_AdditionalInfo>
					</S.Div_TextArea>
				</S.Div_ContentContainer>
			</AlignContainer>
		</S.Div_MainWrapper>
	);
};

export default DetailPage;

const Div_MainWrapper = styled.div`
	width: 100%;
	min-height: 92.5vh;
	height: 100vh;
	background-color: ${color.black[100]};
	position: relative;
`;
const Img_BackgroundImg = styled.img`
	position: absolute;
	opacity: 0.4;
	z-index: 0;
`;

const Div_ContentContainer = styled.div`
	width: 100%;
	height: 100%;

	${flexAlign.alignCenter}
	${flexAlign.justifyBetween}
`;

const Div_TextArea = styled.div`
	color: ${color.gray[900]};
	width: 60rem;
	height: 53rem;
	${flexAlign.directionColumn}
	word-break: keep-all;
	gap: 1rem;
`;

const H1_Title = styled.h1`
	height: 25%;
`;
const P_Overview = styled.p`
	height: 70%;
`;

const Sec_AdditionalInfo = styled.section`
	height: 30%;
`;

const S = {
	Div_MainWrapper,
	Img_BackgroundImg,
	Div_ContentContainer,
	Sec_AdditionalInfo,
	Div_TextArea,
	H1_Title,
	P_Overview,
};
