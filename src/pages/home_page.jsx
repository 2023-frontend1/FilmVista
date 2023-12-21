import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import movies from '../constants/react_query_key';
import moviesFetchFn from '../libs/axios/movie';
import { color } from '../styles/themes/@index';
import Preview from './components/preview';

const HomePage = () => {
	const navigate = useNavigate();
	const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery({
		queryKey: movies.popular,
		queryFn: ({ pageParam = 1 }) => moviesFetchFn.popular(pageParam),
		getNextPageParam: (lastPage, allPosts) => {
			return lastPage.page !== allPosts[0].total_pages && lastPage.page + 1;
		},
	});

	if (isLoading) {
		return <div>로딩 중.. 쿠쿠루빙뽕🤪</div>;
	}

	const onClickDetailBtn = (movieId) => {
		navigate(`/detail/${movieId}`);
	};

	return (
		<InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
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
							onClickDetailBtn={onClickDetailBtn}
							$bgColor={idx % 2 == 0 ? color.black[200] : color.black[100]}
							$isReverse={idx % 2 == 0}
						/>
					);
				});
			})}
		</InfiniteScroll>
	);
};

export default HomePage;
