import InfiniteScroll from 'react-infinite-scroller';
import TopButton from '../../components/top_button';
import useInfiniteMovieData from '../../hooks/use_infinite_movie_data';
import PreviewList from './components/preview_list';

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
			<PreviewList data={data} />
			<TopButton />
		</InfiniteScroll>
	);
};

export default HomePage;
