import axios from 'axios';

/**
 * @description
 * - movie data 전용 api instance 입니다.
 * - api url 과 service key 는 환경변수로 관리합니다.
 * - 언어와 지역은 한국 기준으로 설정합니다.
 */
const axiosMovieInstance = () =>
	axios.create({
		baseURL: import.meta.env.VITE_APP_MOVIES_API_URL,
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer ' + import.meta.env.VITE_APP_MOVIES_API_KEY,
		},
		params: {
			language: 'ko-KR',
			region: 'KR',
		},
	});

export default axiosMovieInstance;
