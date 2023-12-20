import styled from 'styled-components';
import { PosterCard } from '../../components/@index';
import { flexAlign } from '../../styles/themes/@index';
const PostCardList = ({ data }) => {
	return (
		<S.Div_CardWrapper>
			{data.pages.map((page) => {
				return page.results.map((poster) => {
					return <PosterCard key={poster.id} />;
				});
			})}
		</S.Div_CardWrapper>
	);
};

export default PostCardList;

const Div_CardWrapper = styled.div`
	/* position: absolute;*/
	${flexAlign.flexStart}
	flex-wrap: wrap;
`;

const S = {
	Div_CardWrapper,
};
