import { useInfiniteQuery } from 'react-query';
import movies from '../constants/query_keys/movies';
import moviesFetchFn from '../libs/axios/movie';

const useInfiniteMovieData = ({ sortMethod, paramsArr }) => {
	return useInfiniteQuery({
		queryKey: movies[sortMethod],
		queryFn: ({ pageParam = 1 }) =>
			moviesFetchFn[sortMethod](pageParam, ...paramsArr),
		getNextPageParam: (lastPage, allPosts) => {
			return lastPage.page !== allPosts[0].total_pages && lastPage.page + 1;
		},
	});
};

export default useInfiniteMovieData;
