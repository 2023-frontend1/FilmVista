import { useInfiniteQuery } from 'react-query';
import movies from '../constants/query_keys/movies';
import moviesFetchFn from '../libs/axios/movie';

const useInfiniteMovieData = ({ filter, paramsArr }) => {
	return useInfiniteQuery({
		queryKey: movies[filter],
		queryFn: ({ pageParam = 1 }) =>
			moviesFetchFn[filter](pageParam, ...paramsArr),
		getNextPageParam: (lastPage, allPosts) => {
			return lastPage.page !== allPosts[0].total_pages && lastPage.page + 1;
		},
	});
};

export default useInfiniteMovieData;
