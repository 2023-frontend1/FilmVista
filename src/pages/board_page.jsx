import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import AlignContainer from '../components/align_container';
import movies from '../constants/query_keys/movies';
import pageNames from '../constants/texts/page_names';
import moviesFetchFn from '../libs/axios/movie';
import { color, fontSize, fontWeight } from '../styles/themes/@index';
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
		<>
			<AlignContainer $compressibility="10%">
				<br />
				<S.H1_CategoryText>{pageNames[sortMethod]}</S.H1_CategoryText>
				<br />
				<InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
					<PostCardList data={data} />
				</InfiniteScroll>
			</AlignContainer>
		</>
	);
};
export default BoardPage;

const H1_CategoryText = styled.h1`
	left: 5rem;
	top: 4rem;
	font-size: ${fontSize.big};
	font-weight: ${fontWeight.bold};
	color: ${color.gray[900]};
`;
const S = {
	H1_CategoryText,
};
