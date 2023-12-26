import InfiniteScroll from 'react-infinite-scroller';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
	AlignContainer,
	InfiniteList,
	PostCard,
	Spacer,
	TopButton,
} from '../components/@index';
import pageNames from '../constants/texts/page_names';
import useInfiniteMovieData from '../hooks/use_infinite_movie_data';
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../styles/themes/@index';

/**
 * /**
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * - fetching 된데데이터를 PosterCard에 각각뿌려주어서
 * 영화포스터와 제목,내용,별점이 보여지는 페이지컴포넌트입니다.
 */
const BoardPage = () => {
	const { filter } = useParams();
	const paramsArr = [filter];

	const { data, fetchNextPage, hasNextPage } = useInfiniteMovieData({
		filter,
		paramsArr,
	});

	return (
		<>
			<AlignContainer $compressibility="10%">
				<Spacer $height="10px" />
				<S.H1_CategoryText>{pageNames[filter]}</S.H1_CategoryText>
				<Spacer $height="12px" />
				<InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
					<S.Div_ListContainer>
						<InfiniteList data={data} renderComponent={PostCard} />
					</S.Div_ListContainer>
					<TopButton />
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

const Div_ListContainer = styled.div`
	${flexAlign.flexStart}
	flex-wrap: wrap;
	gap: 5rem;
`;

const S = {
	H1_CategoryText,
	Div_ListContainer,
};
