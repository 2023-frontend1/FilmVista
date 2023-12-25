import axiosMovieInstance from './base';

/**
 * @param {number} page 페이지 번호
 * @param {popular | now_playing | upcoming | top_rated} filter 영화목록을 불러올 기준
 * @description 인기순으로 정렬된 20개의 영화 목록을 가져옵니다.
 */
const getMoviesByFilter = async (page, filter) => {
	const response = await axiosMovieInstance().get(`/movie/${filter}`, {
		params: { page },
	});
	return response.data;
};
/**
 * @param {number} movieId 영화 식별자
 * @description id 를 기준으로 영화의 세부사항을 가져옵니다.
 */
const getMovieOne = async (movieId) => {
	const response = await axiosMovieInstance().get(`/movie/${movieId}`);
	return response.data;
};
/**
 * @param {number} page 페이지 번호
 * @param {string} query 검색키워드
 * @description query 값을 기준으로, 관련 영화 목록을 가져옵니다.
 */
const getMoviesSearching = async (page, query) => {
	const response = await axiosMovieInstance().get('/search/movie', {
		params: { page, query },
	});
	return response.data;
};

/**
 * @must_read
 * - `popular`, `now_playing`, `upcoming`, `top_rated` 키에 대한 값은 `getMoviesByFilter` 함수로 동일합니다.
 * - 하나의 key-value 쌍으로 바꿀 수 있습니다만, 해당 key 를 사용해 필요한 값을 가져오는 패턴이 이 밖에도 더 있어, 통일성을 위해 이러한 구조로 작성하였습니다.
 */
const moviesFetchFn = {
	popular: getMoviesByFilter,
	now_playing: getMoviesByFilter,
	upcoming: getMoviesByFilter,
	top_rated: getMoviesByFilter,
	search: getMoviesSearching,
	detail: getMovieOne,
};
export default moviesFetchFn;
