import InfiniteScroll from 'react-infinite-scroller';
import useInfiniteMovieData from '../../hooks/use-infinite-movie-data';
import PreviewList from './components/preview_list';
import TopButton from '../../components/top_button';

const HomePage = () => {
	const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteMovieData({
		sortMethod: 'popular',
		paramsArr: [],
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
