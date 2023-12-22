import { useNavigate } from 'react-router-dom';
import { color } from '../../../styles/themes/@index';
import Preview from './preview';

const PreviewList = ({ data }) => {
	const navigate = useNavigate();
	return (
		<>
			{data.pages.map((page) => {
				return page.results.map((poster, idx) => {
					return (
						<Preview
							key={idx}
							movieId={poster.id}
							title={poster.title}
							description={poster.overview ? poster.overview : undefined}
							popularity={poster.popularity}
							voteAverage={poster.vote_average}
							voteCount={poster.vote_count}
							releaseDate={poster.release_date}
							posterPath={
								import.meta.env.VITE_APP_MOVIES_API_IMG_URL + poster.poster_path
							}
							onClickDetailBtn={() => navigate(`/detail/${poster.id}`)}
							$bgColor={idx % 2 == 0 ? color.black[200] : color.black[100]}
							$isReverse={idx % 2 == 0}
						/>
					);
				});
			})}
		</>
	);
};

export default PreviewList;
