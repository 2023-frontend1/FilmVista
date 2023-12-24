import InfiniteScroll from 'react-infinite-scroller';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { AlignContainer, TopButton } from '../../components/@index';
import pageNames from '../../constants/texts/page_names';
import useInfiniteMovieData from '../../hooks/use-infinite-movie-data';
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index';
import { PostCardList, SkeletonList } from './components/@index';

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
	const { filter } = useParams();
	const [searchParam] = useSearchParams();
	const subject = searchParam.get('subject');

	/**
	 * @description
	 * - 데이터 패칭 함수로 넘길 params 를 배열형태로 가공합니다.
	 * - 'subject' 값이 있다면(filter='search), 그 값과 filter 를 배열에 담습니다.
	 * - 'subject' 값이 없다면, filter(어떤 영화데이터 목록을 가져올지 기준) 만 배열에 담습니다.
	 */
	const paramsArr = subject ? [subject, filter] : [filter];

	const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteMovieData({
		filter,
		paramsArr,
	});

	return (
		<>
			<AlignContainer $compressibility="10%">
				<br />
				<S.H1_CategoryText>{pageNames[filter]}</S.H1_CategoryText>
				<br />
				<S.Div_ListContainer>
					{isLoading ? (
						<SkeletonList />
					) : (
						<InfiniteScroll
							hasMore={hasNextPage}
							loadMore={() => fetchNextPage()}
						>
							<S.Div_ListContainer>
								<PostCardList data={data} />
								<TopButton />
							</S.Div_ListContainer>
						</InfiniteScroll>
					)}
				</S.Div_ListContainer>
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

const Div_ListContainer = styled.div`
	${flexAlign.flexStart}
	flex-wrap: wrap;
	gap: 5rem;
`;

const S = {
	H1_CategoryText,
	Div_ListContainer,
};
