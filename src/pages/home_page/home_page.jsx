import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import movies from '../../constants/query_keys/movies';
import moviesFetchFn from '../../libs/axios/movie';
import PreviewList from './components/preview_list';

const HomePage = () => {
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
	return (
		<InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
			<PreviewList data={data} />
		</InfiniteScroll>
	);
};

export default HomePage;
