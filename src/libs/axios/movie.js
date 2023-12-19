import axiosMovieInstance from './base';

/**
 * @param {number} page 페이지 번호
 * @description 인기순으로 정렬된 20개의 영화 목록을 가져옵니다.
 */
const getMoviesPopular = (page) => {
	const response = axiosMovieInstance.get('/movie/popular', {
		params: { page },
	});
	return response;
};

/**
 * @param {number} page 페이지 번호
 * @description 현재 상영 중인 20개의 영화 목록을 가져옵니다.
 */
const getMoviesNowPlaying = (page) => {
	const response = axiosMovieInstance.get('/movie/now_playing', {
		params: { page },
	});
	return response;
};

/**
 * @param {number} page 페이지 번호
 * @description 상영 대기 중인 20개의 영화를 배열로 반환합니다.
 */
const getMoviesUpcoming = (page) => {
	const response = axiosMovieInstance.get('/movie/upcoming', {
		params: { page },
	});
	return response;
};

/**
 * @param {number} page 페이지 번호
 * @description 등급별로 정렬된 20개의 영화 목록을 가져옵니다.
 */
const getMoviesTopRated = (page) => {
	const response = axiosMovieInstance.get('/movie/top_rated', {
		params: { page },
	});
	return response;
};

/**
 * @param {number} movieId 영화 식별자
 * @description id 를 기준으로 영화의 세부사항을 가져옵니다.
 */
const getMovieOne = (movieId) => {
	const response = axiosMovieInstance.get(`/movie/${movieId}`);
	return response;
};
/**
 * @param {string} query 검색키워드
 * @description query 값을 기준으로, 관련 영화 목록을 가져옵니다.
 */
const getMoviesSearching = (query) => {
	const response = axiosMovieInstance.get('/search/movie', {
		params: { query },
	});
	return response;
};
export {
	getMovieOne,
	getMoviesNowPlaying,
	getMoviesPopular,
	getMoviesSearching,
	getMoviesTopRated,
	getMoviesUpcoming,
};
