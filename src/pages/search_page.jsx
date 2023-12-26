import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useSearchParams } from 'react-router-dom';
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

const SearchPage = () => {
	const [searchParams] = useSearchParams();
	const subject = searchParams.get('subject');
	const filter = 'search'; // 영화 목록 출력 기준
	const paramsArr = [subject]; // 데이터 패칭 함수에 전달할 파라미터 배열

	useEffect(() => {
		/* 'subject' 값이 없다면, 페이지 방문이력을 따라 되돌아 갑니다. */
		if (subject === null) {
			window.history.back();
		}
	}, []);

	const { data, fetchNextPage, hasNextPage } = useInfiniteMovieData({
		filter,
		paramsArr,
	});

	// 검색 결과가 0 개 일 경우
	if (!data?.pages[0].total_results) {
		return (
			<AlignContainer $compressibility="10%">
				<Div_CenterWrapper>
					<h2> "{subject}" 에 대한 검색결과가 없습니다. 😭</h2>
				</Div_CenterWrapper>
			</AlignContainer>
		);
	}

	return (
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
	);
};

export default SearchPage;
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
const Div_CenterWrapper = styled.div`
	width: 100%;
	height: 80vh;
	text-align: center;
	word-break: keep-all;
	${flexAlign.flexCenter}
`;
const S = {
	H1_CategoryText,
	Div_ListContainer,
	Div_CenterWrapper,
};
