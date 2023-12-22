import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import AlignContainer from '../components/align_container';
import movies from '../constants/query_keys/movies';
import moviesFetchFn from '../libs/axios/movie';
import { fontSize, fontWeight } from '../styles/themes/@index';
import PostCardList from './components/post_card_list';

/**
 * /**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - fetching 된데데이터를 PosterCard에 각각뿌려주어서
 * 영화포스터와 제목,내용,별점이 보여지는 페이지컴포넌트입니다.
 *
 *
 */
const BoardPage = () => {
	const { sortMethod } = useParams();
	const [searchParam] = useSearchParams();
	const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery({
		queryKey: movies[sortMethod],
		queryFn: ({ pageParam = 1 }) =>
			moviesFetchFn[sortMethod](pageParam, searchParam.get('subject')),
		getNextPageParam: (lastPage, allPosts) => {
			return lastPage.page !== allPosts[0].total_pages && lastPage.page + 1;
		},
	});

	if (isLoading) {
		return <div>🖕</div>;
	}

	return (
		<AlignContainer $compressibility="5%">
			<S.H1_CatagoryText>인기영화(catagory)</S.H1_CatagoryText>
			<InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
				<PostCardList data={data} />
			</InfiniteScroll>
		</AlignContainer>
	);
};
export default BoardPage;

const H1_CatagoryText = styled.h1`
	left: 5rem;
	top: 4rem;
	position: relative;
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
`;
const S = {
	H1_CatagoryText,
};
