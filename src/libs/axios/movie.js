import axiosMovieInstance from './base';

/**
 * @param {number} page 페이지 번호
 * @description 인기순으로 정렬된 20개의 영화 목록을 가져옵니다.
 */
const getMoviesPopular = async (page) => {
	const response = await axiosMovieInstance.get('/movie/popular', {
		params: { page },
	});
	return response.data;
};

/**
 * @param {number} page 페이지 번호
 * @description 현재 상영 중인 20개의 영화 목록을 가져옵니다.
 */
const getMoviesNowPlaying = async (page) => {
	const response = await axiosMovieInstance.get('/movie/now_playing', {
		params: { page },
	});
	return response.data;
};

/**
 * @param {number} page 페이지 번호
 * @description 상영 대기 중인 20개의 영화를 배열로 반환합니다.
 */
const getMoviesUpcoming = async (page) => {
	const response = await axiosMovieInstance.get('/movie/upcoming', {
		params: { page },
	});
	return response.data;
};

/**
 * @param {number} page 페이지 번호
 * @description 등급별로 정렬된 20개의 영화 목록을 가져옵니다.
 */
const getMoviesTopRated = async (page) => {
	const response = await axiosMovieInstance.get('/movie/top_rated', {
		params: { page },
	});
	return response.data;
};

/**
 * @param {number} movieId 영화 식별자
 * @description id 를 기준으로 영화의 세부사항을 가져옵니다.
 */
const getMovieOne = async (movieId) => {
	const response = await axiosMovieInstance.get(`/movie/${movieId}`);
	return response.data;
};
/**
 * @param {number} page 페이지 번호
 * @param {string} query 검색키워드
 * @description query 값을 기준으로, 관련 영화 목록을 가져옵니다.
 */
const getMoviesSearching = async (page, query) => {
	const response = await axiosMovieInstance.get('/search/movie', {
		params: { page, query },
	});
	return response.data;
};
const moviesFetchFn = {
	popular: getMoviesPopular,
	now_playing: getMoviesNowPlaying,
	upcoming: getMoviesUpcoming,
	top_rated: getMoviesTopRated,
	search: getMoviesSearching,
	detail: getMovieOne,
};
export default moviesFetchFn;
