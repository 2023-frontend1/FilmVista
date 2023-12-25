import InfiniteScroll from 'react-infinite-scroller';
import { InfiniteList, Preview, TopButton } from '../../components/@index';
import useInfiniteMovieData from '../../hooks/use_infinite_movie_data';

const HomePage = () => {
	const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteMovieData({
		filter: 'popular',
		paramsArr: ['popular'],
	});

	if (isLoading) {
		return <div>로딩 중.. 쿠쿠루빙뽕🤪</div>;
	}
	return (
		<InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
			<InfiniteList data={data} renderComponent={Preview} />
			<TopButton />
		</InfiniteScroll>
	);
};

export default HomePage;
