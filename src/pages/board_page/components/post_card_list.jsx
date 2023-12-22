import { useNavigate } from 'react-router-dom';
import PosterCard from './poster_card';
const PostCardList = ({ data }) => {
	const navigate = useNavigate();

	return (
		<>
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
		</>
	);
};

export default PostCardList;
