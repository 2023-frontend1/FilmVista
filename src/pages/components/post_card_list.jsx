import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PosterCard } from '../../components/@index';
import { flexAlign } from '../../styles/themes/@index';
const PostCardList = ({ data }) => {
	const navigate = useNavigate();

	return (
		<S.Div_CardWrapper>
			{data.pages.map((page) => {
				return page.results.map((poster) => {
					return (
						<PosterCard
							key={poster.id}
							posterPath={
								import.meta.env.VITE_APP_MOVIES_API_IMG_URL + poster.poster_path
							}
							title={poster.title}
							overview={poster.overview ? poster.overview : undefined}
							popularity={poster.popularity}
							voteAverage={poster.vote_average}
							voteCount={poster.vote_count}
							releaseDate={poster.release_date}
							onClick={() => {
								navigate(`/detail/${poster.id}`);
							}}
						/>
					);
				});
			})}
		</S.Div_CardWrapper>
	);
};

export default PostCardList;

const Div_CardWrapper = styled.div`
	${flexAlign.flexStart}
	flex-wrap: wrap;
	gap: 5rem;
`;

const S = {
	Div_CardWrapper,
};
